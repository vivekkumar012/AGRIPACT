import jwt from 'jsonwebtoken'
import { placeModel } from '../Models/placeModel.js';

export const createPlace = async (req, res) => {
    try {
        const adminId = req.id;
        const { title, address, photos, description, perks, extraInfo, checkIn} = req.body;
        if(!title || !address || !photos || !description || !perks || !extraInfo || !checkIn) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
        const existingInfo = await placeModel.findById({
            adminId
        })
        if(existingInfo) {
            return res.status(402).json({
                message: "Already exist this item",
                success: false
            })
        }
        const newPlace = await placeModel.create({
            title,
            address,
            photos,
            description,
            perks,
            extraInfo,
            checkIn
        })

        return res.status(200).json({
            message: "Place Order Successfully",
            success: true,
            newPlace
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in createPlace Controller",
            error: error.message
        })
    }
}

export const getUserPlaces = async (req, res) => {
    try {
        const {} = req.body;
    } catch (error) {
        
    }
}

export const getPlaceById = async (req, res) => {
    
}

export const updatePlace = async (req, res) => {
    
}

export const getAllPlaces = async (req, res) => {
    
}