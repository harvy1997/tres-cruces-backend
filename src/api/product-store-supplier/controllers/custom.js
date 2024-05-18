'use strict';

/**
 * product-store controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::product-store-supplier.product-store-supplier'
    , ({ strapi }) => ({
        async recharge(ctx) {
            //obtengo la data
            const res = ctx.request.body.data;
            let productStoreSupplierList = [];
            let productStoreList = []
            let isCommit = false;

            for (const rechargeP of res) {
                let { product_store, quantity } = rechargeP;
                //llamo a la bd obtengo los product-stoer-supplier
                let productStoreSuppliers = await strapi.db.query('api::product-store-supplier.product-store-supplier').findMany({
                    where: {
                        product_store: {
                            id: product_store.id
                        }
                    },
                    orderBy: {
                        priority: "asc"
                    }
                });
                let idx = 0;
                let exd = quantity;
                let limit = productStoreSuppliers.length;
                isCommit = false;
                //resto lo que necesito
                do {
                    const productStoreSupplier = productStoreSuppliers[idx];
                    if (productStoreSupplier.quantity < exd) {
                        exd -= productStoreSupplier.quantity;
                        productStoreSupplier.quantity = 0;
                    } else {
                        productStoreSupplier.quantity -= exd;
                        isCommit = true;
                        exd = 0;
                    }
                    idx++;
                } while (exd > 0 && idx < limit)

                //product_store.attributes.quantity -= quantity;
                product_store.quantity -= quantity;
                productStoreList.push(product_store)
                productStoreSupplierList = productStoreSupplierList.concat(productStoreSuppliers)
                if (!isCommit) break;
            }
            if (!isCommit) ctx.send({ msg: "falló", data: null })

            //obtengo el objeto de knex.js
            const knex = strapi.db.connection;
            ctx.send({ msg: "todo bien pa",data:{a:productStoreSupplierList,b:productStoreList} })
            try {
                await knex.transaction(async (trx) => {
                    for (const productStoreSupplier of productStoreSupplierList) {
                        await knex("product_store_suppliers").transacting(trx).where({id:productStoreSupplier.id}).update({quantity:productStoreSupplier.quantity})
                    }
                    for (const productStore of productStoreList) {
                        //await knex("product_stores").transacting(trx).where({id:productStore.id}).update({quantity:productStore.attributes.quantity})
                        await knex("product_stores").transacting(trx).where({id:productStore.id}).update({quantity:productStore.quantity})
                    }
                    ctx.send({ msg: "todo okey",data:{a:productStoreSupplierList,b:productStoreList} })
                    await trx.commit();
                })
            } catch (error) {
                ctx.send({ msg: "falló",data:productStoreSupplierList })
            }

            return null;
        },
        async interchange(ctx){

        }
    })
);
