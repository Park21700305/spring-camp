import axios from 'axios';
import { BoardResponse } from '../types';

export const fetchBoards = async (): Promise<BoardResponse[]> => {
    const response = await axios.get<BoardResponse[]>('http://localhost:8080/api/board/articles');
    return response.data;
};
