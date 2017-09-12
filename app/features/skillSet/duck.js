export function barGraph() {
    return [

        { x: 'CSS3', y: 80, color: '#009bcc' },
        { x: 'Javascript', y: 100, color: '#e1f92c' },
        { x: 'HTML5', y: 120, color: '#f58b1f' },
        { x: 'C#', y: 99, color: '#005a9e' },
        { x: 'Others', y: 50, color: '#e3a51a' },
        { x: 'React.js', y: 70, color: '#17c5e8' },
        { x: 'Angular.js', y: 115, color: '#ea3027' },
        { x: 'Ionic.js', y: 55, color: '#4DB6AC' }
    ]
};

export function initialBarGraph() {
    return [

        { x: 'CSS3', y: 0, color: '#009bcc' },
        { x: 'Javascript', y: 0, color: '#e1f92c' },
        { x: 'HTML5', y: 0, color: '#f58b1f' },
        { x: 'C#', y: 0, color: '#005a9e' },
        { x: 'Others', y: 0, color: '#e3a51a' },
        { x: 'React.js', y: 0, color: '#17c5e8' },
        { x: 'Angular.js', y: 0, color: '#ea3027' },
        { x: 'Ionic.js', y: 0, color: '#4DB6AC' }
    ]
};

export function pieChart() {
    return [
        { key: 'UI/UX Design', value: 600, color: '#009bcc' },
        { key: 'Front End', value: 700, color: '#f58b1f' },
        { key: 'Back End', value: 500, color: '#005a9e' },
        { key: 'Testing', value: 400, color: '#e21f36' }

    ]

}

export function initialPieChart() {
    return [
        { key: 'UI/UX Design', value: 0, color: '#009bcc' },
        { key: 'Front End', value: 0, color: '#f58b1f' },
        { key: 'Back End', value: 0, color: '#005a9e' },
        { key: 'Testing', value: 0, color: '#e21f36' }


    ]
}

export function lineChart() {
    return [
        [
            { x: 10, y: 25 },
            { x: 20, y: 10 },
            { x: 30, y: 25 },
            { x: 40, y: 10 },
            { x: 50, y: 12 },
            { x: 60, y: 25 }
        ], [
            { x: 10, y: 40 },
            { x: 20, y: 30 },
            { x: 30, y: 25 },
            { x: 40, y: 60 },
            { x: 50, y: 22 },
            { x: 60, y: 9 }
        ],
        [
            { x: 5, y: 20 },
            { x: 15, y: 30 },
            { x: 25, y: 25 },
            { x: 35, y: 43 },
            { x: 45, y: 50 },
            { x: 60, y: 60 }
        ]
    ]
}

export function initialLineChart(){
    return [
        [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ], [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ],
        [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ]
    ]
}