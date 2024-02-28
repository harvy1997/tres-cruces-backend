'use strict';

/**
 * product-store-supplier controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// Importa el servicio de entidad necesario
const productStoreService = strapi.services.productStore;

module.exports = createCoreController('api::product-store-supplier.product-store-supplier'
// ,({strapi})=>({
//     async update(ctx){
        
//     }
// })
);
