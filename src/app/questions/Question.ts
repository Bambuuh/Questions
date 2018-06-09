import { Choice } from './Choice';

export class Question {
    public published_at: string;
    public question: string;
    public url: string;
    public choices: Choice[];
}
