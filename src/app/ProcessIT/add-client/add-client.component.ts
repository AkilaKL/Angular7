import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddClientService } from 'src/app/shared/add-client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { color } from 'highcharts';
import { AddClient } from 'src/app/shared/add-client.model';
import { Client } from 'src/app/shared/client.model';
import { ClientService } from 'src/app/shared/client.service';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  items = [
    {
      id: 1,
      text: 'Ajouter un controle'
    }]
    lc = [
      {
        id: 1,
        text: 'Ajouter un controle'
      }]
      lo = [
        {
          id: 1,
          text: 'Ajouter un controle'
        }]
  
  listma: any []=[];
  public pieChartLabels = ['Effectif', 'Effectif avec remarque', 'Ineffectif', 'Non Testé'];
  public pieChartData = [8, 2, 3, 1 ];
  public pieChartType='pie';
  public colors=[{backgroundColor:['#107C10', '#F3C911', '#D82C20', '#998F85']}];
  

  
  

  constructor(public service: AddClientService, public tostr:ToastrService, public router: Router, public clientservice: ClientService) { }
  clientlist:Client[];
  @Input() inputData: Object;
  ngOnInit(): void {
    this.listma =[];
    this.clientservice.getClients().toPromise().then(res =>this.clientlist= res as Client[]);
    this.resetForm();
    this.parseChartData(this.inputData)
  }

resetForm(form?:NgForm){
  
  if (form!= null)
  form.resetForm();
  this.service.formData ={
    
    Clientname:'',
    NomControlA: '',
    MACIN : '',
    MACDN :'',
    MACD01 :'',
    MACD02 :'',
    MACD03 :'',
    MACD04 :'',
    MACD05 :'',
    MACD06 :'',
    MACI01 :'',
    MACI02 :'',
    MACI03 :'',
    MACI04 :'',
    MACI05 :'',
    MACI06 :'',
    NomControlO : '',
    MOCIN : '',
    MOCDN :'',
    MOCD01 :'',
    MOCD02 :'',
    MOCD03 :'',
    MOCI01 :'',
    MOCI02 :'',
    MOCI03 :'',
    NomControlC: '',
    MCCIN : '',
    MCCDN : '',
    MCCD01 :'',
    MCCD02 :'',
    MCCD03 :'',
    MCCD04 :'',
    MCCD05 :'',
    MCCI01 :'',
    MCCI02 :'',
    MCCI03 :'',
    MCCI04 :'',
    MCCI05 :'',
    Date:null,
    
  }
} 
onSubmit(form:NgForm)
  {
    this.service.postAddClient(form.value).subscribe(
      res=>{this.resetForm(form);
        this.tostr.success('ajouté avec succès', 'Gestion des Process IT');
        this.router.navigateByUrl('/dashboard');
    
    
    
    

    },
    err=>{console.log(err);
      this.tostr.error(err, 'Gestion des Process IT');
    }

    );

  }
  parseChartData(listma: any)
  {
    console.log(listma)
  }


  
  
}