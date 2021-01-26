import { Document } from 'mongoose';
export interface Job extends Document{
id?: string;
title: string;
salaire: number; 
}