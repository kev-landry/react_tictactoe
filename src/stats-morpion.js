import React, { Component } from 'react';

class StatMorpion{

    static calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    static getWinners(boards){
        let Winners = [];
        Winners['X'] = 0;
        Winners['O'] = 0;
        let draws = 0;

        let w;

        for (let i = 0; i < boards.length; i++) {

            if(w = this.calculateWinner(boards[i])){
                Winners[w] ++;
            }else
                draws ++;
        }

        return {
            'X': Winners['X'],
            'O': Winners['O'],
            'D': draws
        }
    }



}


export default StatMorpion;