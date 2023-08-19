import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-aws-search',
  templateUrl: './aws-search.component.html',
  styleUrls: ['./aws-search.component.css']
})
export class AwsSearchComponent {
  chatFormGroup =  this._formBuilder.group({
    questionCtl: ['', Validators.required],
  });

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  length!: number;
  dataSource = new MatTableDataSource(); 
  
  displayedColumns: string[] = ['document_uri','document_title','document_text','answer_text','type'];

  constructor(private _formBuilder: FormBuilder,
    private commonService: CommonService ) {}
  
  askQuestion()
  {
    this.dataSource = new MatTableDataSource();
    const hostname : string = "genai-poc.atoscamp.net"; //"localhost:8002"; 
    const question  = this.chatFormGroup.getRawValue()["questionCtl"]; 
    const url: string = `https://${hostname}/awsgenai/aiapis/search/'${question}'`;
    console.log(url);
    

    this.commonService.getData(url).subscribe(        
      {
        next: (results) => { 
          this.dataSource = new MatTableDataSource(results);
          setTimeout(() => this.dataSource.paginator = this.paginator.toArray()[0]);          
          this.dataSource.sort = this.sort.toArray()[0];
          this.length = results.length;   
        },
        error: (err) => console.log(err),
        complete: () => console.log("completed.")
      } 
    )
  }
}
