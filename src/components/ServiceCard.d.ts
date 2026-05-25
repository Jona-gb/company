import React from 'react';
import { LucideIcon } from 'lucide-react';
interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    features?: string[];
    highlighted?: boolean;
    image?: string;
}
export declare const ServiceCard: React.FC<ServiceCardProps>;
export {};
