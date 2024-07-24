const express = require("express")
const { addTransaction, getAllTransaction, editTransaction,deleteTransaction } = require("../controllers/transactionController")


//router object
const router=express.Router()

//routes
//add transaction post 
router.post('/add-transaction', addTransaction)

router.post('/edit-transaction', editTransaction)

router.post('/delete-transaction', deleteTransaction)


router.post('/get-transaction', getAllTransaction)


module.exports=router;