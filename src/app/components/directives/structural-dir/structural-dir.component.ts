import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  num1 : string =" ";
  num2 : string = " ";
isDiv1Vissible : boolean = true;
isDiv2Vissible : boolean = false;

isActive : boolean =false;
selectedCity : string = " ";

cityArray : string [] = ['pune','hyderbad','mumbai','delhi'];

studentList:any[]=[
    {
        title: 'Lord of the Rings',
        year: '2001',
        genre: 'fantasy',
        img: 'https://angulartraining.in/imgs/lordoftherings.jpg',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. '
    },
    {
        title: 'Harry Potter',
        year: '2001',
        genre: 'fantasy',
        img: 'https://angulartraining.in/imgs/HarryPotter.jpg',
        description: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.'
    },
    {
        title: 'Avatar',
        year: '2009',
        genre: 'fantasy',
        img: 'https://angulartraining.in/imgs/avatar.jpg',
        description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
    },
    {
        title: 'The Mummy',
        year: '1999',
        genre: 'Adventure',
        img: 'https://angulartraining.in/imgs/mummy.jpg',
        description: 'At an archaeological dig in the ancient city of Hamunaptra, an American serving in the French Foreign Legion accidentally awakens a mummy who begins to wreck havoc as he searches for the reincarnation of his long-lost love. '
    },
    {
        title: 'Jurassic Park',
        year: '1993',
        genre: 'Thriller',
        img: 'https://angulartraining.in/imgs/jurassicpark.jpg',
        description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.'
    },
    {
        title: 'The Matrix',
        year: '1999',
        genre: 'Action',
        img: 'https://angulartraining.in/imgs/matrix.jpg',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. '
    },
    {
        title: 'Game of Thrones',
        year: '2011',
        genre: 'Drama',
        img: 'https://angulartraining.in/imgs/gameofthrones.jpg',
        description: 'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.'
    },
    {
        title: 'The Avengers',
        year: '2012',
        genre: 'Action',
        img: 'https://angulartraining.in/imgs/avengers.jpg',
        description: 'Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity'
    },
    {
        title: 'Mission Impossible',
        year: '1996',
        genre: 'Action',
        img: 'https://angulartraining.in/imgs/missionimpossible.jpg',
        description: 'An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.'
    }
]

showDiv1(){
  this.isDiv1Vissible = true;
}
hideDiv1(){
  this.isDiv1Vissible =false;
}
toggleDiv2(){
  this.isDiv2Vissible =!this.isDiv2Vissible;  // if(this.isDiv2vissible ==true {this.isDiv2vissible = false})
}                                              // else { this.isDiv2visible = true}
}
