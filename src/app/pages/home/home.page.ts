import { Component } from "@angular/core";
import { SongService } from "../../services/song.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  list: any = [];
  constructor(private song: SongService) {
    this.list = song.getAllSongs();
    console.log(this.list);
  }
}
