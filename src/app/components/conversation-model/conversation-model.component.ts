import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-conversation-model',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation-model.component.css']
})
export class ConversationModelComponent {

  chatFormGroup =  this._formBuilder.group({
    questionCtl: ['', Validators.required],
  });


  dataSource = new MatTableDataSource(); 
  
  displayedColumns: string[] = ['model_response'];

  constructor(private _formBuilder: FormBuilder,
    private commonService: CommonService ) {}

  askQuestion()
    {
      this.dataSource = new MatTableDataSource();
      const hostname : string = "genai-poc.atoscamp.net"; //"localhost:8001";
      const question  = this.chatFormGroup.getRawValue()["questionCtl"]; 
      const url: string = `https://${hostname}/gcpgenai/conversationapis/chat/'${question}'`;
      console.log(url);
      
  
      this.commonService.getData(url).subscribe(        
        {
          next: (results) => this.dataSource = new MatTableDataSource(results),
          error: (err) => console.log(err),
          complete: () => console.log("completed.")
        } 
      )
    }
}
