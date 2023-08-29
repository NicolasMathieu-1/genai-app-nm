import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-trainingsuggestion',
  templateUrl: './trainingsuggestion.component.html',
  styleUrls: ['./trainingsuggestion.component.css']
})
export class TrainingsuggestionComponent {

  val : string = "";

  chatFormGroup =  this._formBuilder.group({
    questionCtl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
    private commonService: CommonService)
  {}

    askQuestion()
    {
      const hostname : string = "localhost:8001";
      const question  = this.chatFormGroup.getRawValue()["questionCtl"]; 
      const url: string = `http://${hostname}/gcpgenaiapis/apis/suggesttraining/search/'${question}'`;
      console.log(url);
      this.val = "";
  
      this.commonService.getData(url).subscribe(
        {
          next: (resp) =>  this.val = resp.toString(),
          error: (err) => console.log(err),
          complete: () => console.log("completed.")
        }
      )
    }
}
