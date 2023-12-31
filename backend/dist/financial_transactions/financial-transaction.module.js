"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialTransactionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const financial_transaction_schema_1 = require("./schema/financial-transaction.schema");
const financial_transaction_controller_1 = require("./controllers/financial-transaction.controller");
const financial_transaction_service_1 = require("./services/financial-transaction.service");
const product_schema_1 = require("../products/schema/product.schema");
const product_schema_2 = require("../product_items/schema/product.schema");
let FinancialTransactionModule = class FinancialTransactionModule {
};
FinancialTransactionModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: financial_transaction_schema_1.FinancialTransaction.name, schema: financial_transaction_schema_1.FinancialTransactionSchema }, { name: product_schema_1.Product.name, schema: product_schema_1.ProductSchema },
                { name: product_schema_2.ProductItem.name, schema: product_schema_2.ProductItemSchema },]),
        ],
        controllers: [financial_transaction_controller_1.FinancialTransactionController],
        providers: [financial_transaction_service_1.FinancialTransactionService],
    })
], FinancialTransactionModule);
exports.FinancialTransactionModule = FinancialTransactionModule;
//# sourceMappingURL=financial-transaction.module.js.map