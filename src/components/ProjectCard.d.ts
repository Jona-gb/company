import React from 'react';
interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    tags: string[];
    link?: string;
}
export declare const ProjectCard: React.FC<ProjectCardProps>;
export {};
