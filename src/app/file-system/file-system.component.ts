import { Component } from '@angular/core';

@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.css']
})
export class FileSystemComponent {
  name = "File System";
  github = '';
  description = [
    "For this project, we built a FUSE filesystem that allows you to mount a 1 MB disc image as a filesystem.",
    "The main goal of this project was to allow for the creation and deletion of variously sized files, properly " +
    "allocating and deallocating space as the a file grows and shrinks.",
    "We first implemented functionality for creating files with names at least 10 characters long, then the ability " +
    "to read and write from these files.",
    "Next, we added the ability to rename or delete those files, as well as the ability to list out the files that " +
    "are contained in the filesystem.",
    "Finally, we implemented directories, including their creation, deletion, renaming, listing their contents, and " +
    "the creation of new files contained in directories."
  ];
  images = [];
  skills = [
    {name: "C", icon: "bi bi-c-square"},
    {name: "GitHub", icon: "bi bi-github"},
    {name: "Virtual Machines", icon: "bi bi-motherboard"},
  ];
}
