import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import express from 'express';
import connectDB from "./db/db.js";

connectDB();