import Component from "@glimmer/component";
import { service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

import {ajax} from "discourse/lib/ajax";

export default class DirectLinRestriction extends Component {
    @service currentUser;
    @service siteSettings;
    @service router;

    constructor() {
        super(...arguments);   
       /* console.log("Above post stream Outlet Args");
        console.log(this.args.outletArgs);
        
        console.log("router instance from component");
        console.log(this.router); */

        

        const { micro_tactic_restristions } = settings;
        console.log("restriction setting from component");
        console.log(micro_tactic_restristions);
        const restrictedTags = [];
        const allowedTags = [];
        const userGroups = this.currentUser.groups.map(group => group.id);
        micro_tactic_restristions.forEach(restriction => {
            if(!userGroups.includes(restriction.groups[0])){
              restriction.tags.forEach(tag => {
                restrictedTags.push(tag);
              });
            }else{
              restriction.tags.forEach(tag => {
                allowedTags.push(tag);
              });
            }
          });
        
          let difference = restrictedTags.filter(x => !allowedTags.includes(x));
          if(this.args.outletArgs.model.tags.any(tag => difference.includes(tag))){
            this.router.transitionTo(`/c/${this.args.outletArgs.model.category.slug}/${this.args.outletArgs.model.category.id}`);
          }
          const inputArguments = this.args.outletArgs;
          const currentUser = this.currentUser;
          setTimeout(function(){
            const downloadButon = document.querySelector('.pdf-attachment');
            
            downloadButon?.addEventListener('click', function(e){
             console.log(currentUser);
             let emailData = null;
             fetch(`/u/${currentUser.username}/emails.json`).then(resp => resp.json()).then(data => { emailData = data; });
             console.log(emailData);
            });
          }, 500);

       
       
      }
    

   @action
   handlePDFButtonClicks(){
    const downloadButon = document.querySelector('.pdf-attachment');
    console.log('Button Element on load');
    console.log(downloadButon);
    downloadButon?.addEventListener('click', function(e){
      console.log('clicked PDF button');
      console.log(e);
    });
   }
   @action
   navigateToDashboard(){
    this.router.transitionTo("admin.dashboard.general");
   }
   
}

