import React from 'react';
import classes from './Redcoring.module.css';
import axios from '../../../../Instance/Instance';

class Recording extends React.Component{
    constructor(props){
        super(props);
        this.record = React.createRef();
        this.stop = React.createRef();
        this.pause = React.createRef();
        this.player = React.createRef();
    }

    state = {
        error : null
    }
    
    componentDidMount (){
        this.stop.current.disabled = true;
        console.log(this.player)

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia ({
                audio: true
            })
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream);
                let newChunk = [];
                
                this.record.current.onclick = () => {
                    mediaRecorder.start();
                    alert("recorder started");
                    this.record.current.disabled = true;
                    this.stop.current.disabled = false;
                }

                this.stop.current.onclick = () => {
                    mediaRecorder.stop();
                    this.record.current.disabled = false;
                    this.stop.current.disabled = true;
                    
                    this.setState(prevState => {
                        return {
                            counter : prevState.counter + 1
                        }
                    })
                }

                mediaRecorder.ondataavailable = (event) => {
                    newChunk.push(event.data);
                    this.setState({chunk : newChunk});
                }

                mediaRecorder.onstop = () => {
                    const name = prompt("Please enter the name of the clip");
                    
                    const clipContainer = document.createElement('article');
                    const clipLabel = document.createElement('p');
                    const audio = document.createElement('audio');
                    const deleteButton = document.createElement('button');
                    const hr = document.createElement('hr');

                    deleteButton.innerHTML = 'Delete';
                    deleteButton.className = classes.DeleteButton
                    clipContainer.className = classes.Player;
                    hr.className = classes.hr;
                    audio.className = classes.AudioControls;
                    clipLabel.className = classes.ClipLabel;
                    
                    if(name.trim() === ''){
                        clipLabel.innerHTML = "Unnamed Clip"
                    }
                    else{
                        clipLabel.innerHTML = name;
                    }
                    
                    clipContainer.appendChild(audio);
                    clipContainer.appendChild(clipLabel);
                    clipContainer.appendChild(deleteButton);
                    clipContainer.appendChild(hr);
                    this.player.current.appendChild(clipContainer);
                    
                    audio.controls = true;
                    const blob = new Blob(this.state.chunk, { 'type' : 'audio/ogg; codecs=opus' });
                    newChunk = [];
                    const audioURL = window.URL.createObjectURL(blob);
                    audio.src = audioURL;
                   
                    deleteButton.onclick = event => {
                        event.target.parentNode.remove();
                    }
                }
            })
            .catch(err => {
                console.log('The following getUserMedia error occured: ' + err);
            });
        } 
        else {
            console.log('getUserMedia not supported on your browser!');
        }
        
    }

    render(){
        const Success = [classes.Success, classes.Button];
        const Danger = [classes.Danger, classes.Button];    

        return (
            <div className = {classes.Recording}>
                <div className = {classes.RecordingControls}>
                    <div className = {classes.Visual}>

                    </div>
                    <button 
                        className = {Success.join(' ')}
                        ref = {this.record}
                    >
                        Record
                    </button>
                    <button 
                        className = {Danger.join(' ')}
                        ref = {this.stop}
                    >
                        Stop
                    </button>
                    <button 
                        className = {[classes.Button, classes.Pause].join(' ')}
                        ref = {this.pause}
                    >
                        Pause
                    </button>
                </div>
                <div 
                    className = {classes.Audio}
                    ref = {this.player}
                >
                </div>
            </div>
        )
    }
}

export default Recording;