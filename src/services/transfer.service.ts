import API from "@/app/api/axios"
import { throwError } from "@/lib/helper/common"
import type { TransferPayload } from "@/types/Transfer"

export const accountTransfer = async(toAccountNumber : string)=>{
    try{
        const response = await API.post(`personal-banking/transfer/to-account-number/prepare`,
            {toAccountNumber : toAccountNumber}
        )
        return response.data
    }catch(error){
         throwError(error)
    }
}

export const nicknameTransfer = async ( nicknameId : number)=>{
    try{
        const response = await API.post(`personal-banking/transfer/nickname/prepare`,
            {nicknameId : nicknameId}
        )
        return response.data
    }catch(error){
        throwError(error)
    }
}

export const transferValidate = async (toAccountId : number)=>{
    try{
        const response = await API.post('personal-banking/transfer/validate',
            {toAccountId}
        )
        return response.data.data
    }catch(error){
        throwError(error)
    }
}

export const confirmTransfer = async ( data : TransferPayload)=>{
    try{
        const response = await API.post('personal-banking/transfer/confirm',{
            toAccountId : data.toAccountId,
            amount : data.amount,
            note : data.note,
            pin : data.pin
        })
        return response.data
    
    }catch(error){

        throwError(error)
    }
}