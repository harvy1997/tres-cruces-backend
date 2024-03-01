'use strict';

/**
 * product-store controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::product-store.product-store'
,({strapi})=>({
    async update(ctx){
        const {id}=await ctx.params;
        let productStore=ctx.request.body.data;
        const old=(await super.findOne(ctx)).data.attributes;
        console.log(strapi.entityService);
        if(old.quantity_initial!=productStore.quantity_initial){
            //strapi.entityService.f
            //console.log("chiquis",old.quantity_initial," ",productStore.quantity_initial);
            //let diference=productStore.quantity_initial-old.quantity_initial
            if(old.quantity>productStore.quantity_initial){
                return null;
            }
        }
        console.log("grande");
        const result= await super.update(ctx);
        return result;
    }
})
);
