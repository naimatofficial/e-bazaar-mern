import User from '../models/userModel.js'
import catchAsync from '../utils/catchAsync.js'
import { createOne, deleteOne, getAll, getOne } from './handleFactory.js'

export const createUser = createOne(User)
export const getUsers = getAll(User)
export const getUser = getOne(User)
export const deleteUser = deleteOne(User)
export const updateUser = catchAsync(async (req, res, next) => {
    const { firstName, lastName, email, phoneNumber } = req.body
})
