import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private socket: any;
  public votes: { option: string, count: number }[] = [];

  constructor(private navCtrl: NavController) {
    this.socket = io('http://localhost:3000');
    this.socket.on('newVote', (option: string) => {
      this.updateVotes(option);
    });
    this.socket.on('voteCountUpdate', (voteCount: any) => {
      this.updateVoteCountsFromServer(voteCount);
    });
  }

  updateVotes(option: string) {
    const existingVote = this.votes.find(vote => vote.option === option);
    if (existingVote) {
      existingVote.count++;
    } else {
      this.votes.push({ option, count: 1 });
    }
  }

  updateVoteCountsFromServer(voteCount: Record<string, number>) {
    // Update the votes array based on the updated voteCount object
    this.votes = Object.entries(voteCount).map(([option, count]) => ({ option, count }));
  }

  goToVotesPage() {
    this.navCtrl.navigateForward('/vote');
  }

}
