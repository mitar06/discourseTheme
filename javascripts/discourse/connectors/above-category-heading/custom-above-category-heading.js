import Component from "@glimmer/component";
import { service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

import {ajax} from "discourse/lib/ajax";

export default class CustomBannersComponent extends Component {
    @service currentUser;
    @service siteSettings;

    @tracked subcategories_with_positions = null;
    @tracked categories_fetched = false;

    get isAllAccessChild(){
        return this.args.outletArgs?.category?.parentCategory?.id == 15;
    }

    
    get getCategory(){
        return this.args.outletArgs?.category
    }


                        
    

   
}