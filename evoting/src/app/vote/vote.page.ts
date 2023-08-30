import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
// import { io } from 'socket.io-client';



@Component({
  selector: 'app-vote',
  templateUrl: './vote.page.html',
  styleUrls: ['./vote.page.scss'],
})
export class VotePage implements OnInit {
  // private socket: any;
  public selectedOption: string | undefined;


  constructor(private navCtrl: NavController, private socket: Socket,) { 
    // this.socket = io('http://localhost:3000', {reconnection: true});
    // this.socket.connect();
    

  }

  ngOnInit() {
    this.socket.connect();
  }

  vote() {
    this.socket.emit('vote', this.selectedOption);
    this.navCtrl.navigateBack('/home');
  }

}
