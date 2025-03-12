import Component from "@glimmer/component";
import { service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

import {ajax} from "discourse/lib/ajax";

export default class AdminTopNoticesExtension extends Component {
    @service currentUser;
    @service siteSettings;

    @tracked subcategories_with_positions = null;
    @tracked categories_fetched = false;

    constructor() {
        super(...arguments);   
        console.log(this.args.outletArgs);
      }

    
   
}