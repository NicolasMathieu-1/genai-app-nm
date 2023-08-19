import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'deployed-model',
  templateUrl: './deployed-model.component.html',
  styleUrls: ['./deployed-model.component.css'],
})
export class DeployedModelComponent {

  model_response : any[] = [];

  val : string = "";

  firstFormGroup = this._formBuilder.group({
    questionCtl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
    private commonService: CommonService ) {}

  askQuestion()
  {
    const hostname : string = "genai-poc.atoscamp.net"; // "localhost:8001"; 
    const question  = this.firstFormGroup.getRawValue()["questionCtl"]; 
    const url: string = `https://${hostname}/gcpgenai/aiapis/prompts/eviden/'${question}'`;
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
