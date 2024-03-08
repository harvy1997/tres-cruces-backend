'use strict';

/**
 * recharge-product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::recharge-product.recharge-product',
// ({strapi})=>({
//     async sumByGroup(ctx) {
//         try {
//           // Perform a custom query to aggregate the sum grouped by the specified field
//           const result = await strapi.query('recharge-product').model.aggregate([
//             {
//               $group: {
//                 _id: '$groupField', // Field to group by
//                 total: { $sum: '$sumField' } // Field to sum
//               }
//             }
//           ]);
    
//           return result;
//         } catch (error) {
//           console.error('Error:', error);
//           return ctx.response.internalServerError('An error occurred while processing the request.');
//         }
//       },
// })
);
