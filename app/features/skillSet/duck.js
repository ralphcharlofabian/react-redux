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
            { x: 0, y: 25 },
            { x: 20, y: 10 },
            { x: 30, y: 25 },
            { x: 40, y: 10 },
            { x: 50, y: 12 },
            { x: 60, y: 25 }
        ], [
            { x: 5, y: 40 },
            { x: 20, y: 30 },
            { x: 30, y: 25 },
            { x: 40, y: 60 },
            { x: 50, y: 22 },
            { x: 60, y: 9 }
        ],
        [
            { x: 0, y: 20 },
            { x: 15, y: 30 },
            { x: 25, y: 25 },
            { x: 35, y: 43 },
            { x: 45, y: 50 },
            { x: 60, y: 60 }
        ]
    ]
}

export function initialLineChart() {
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

export function peopleFeedback() {
    return [
        {
            id: 1,
            name: 'Ron Trump',
            imageSource: 'http://www.delta-corp.net/images/profil2.jpg',
            feedback: 'He is a good employee who has high goal, not just in corporate but for the future',
            company: 'Eco Company',
            position: 'Dev Manager'
        },
        {
            id: 2,
            name: 'Mich Lu',
            imageSource: 'http://media01.money4invest.com/2010/01/faceyourmanga-female-avatar.jpg',
            feedback: 'Always makes a good output in work, hardworking and he is funny, always making the environment cool',
            company: 'Telco Inc.',
            position: 'Product Manager'
        },
        {
            id: 3,
            name: 'Ernest Vien',
            imageSource: 'https://pickaface.net/gallery/avatar/Ognjen52341d1057cf1.png',
            feedback: 'He is not into grades, This guy is looking beyond grades, but on what he can bring to this world and to the next generation, A respectable future prof I see..',
            company: 'MIT',
            position: 'Professor'
        },
        {
            id: 4,
            name: 'Luk Yu Gao',
            imageSource: 'https://pickaface.net/gallery/avatar/jluisbuenrostro56aefb9b12553.png',
            feedback: 'A cool future team leader!',
            company: 'RobStick Company',
            position: 'Team Leader'
        },
        {
            id: 5,
            name: 'Diane Fraizer',
            imageSource: 'http://www.printeable.com/im.php?f=users/95/4/954_profile.jpg',
            feedback: 'He is like a GEM that will be sooner be more precious than diamond,a guy full of potentials!',
            company: 'Deviant Corp',
            position: 'UI/UX Designer'
        },
        {
            id: 6,
            name: 'Jane Winter',
            imageSource: 'https://pbs.twimg.com/profile_images/780437117/kaksuzie_400x400.jpg',
            feedback: 'All I can say is, Jack of all trades!!! ',
            company: 'Deviant Corp',
            position: 'Full Stack Developer'
        },
    ]
}

export function scheduledStuff() {
    return [
        {
            id: 1,
            imageSource: 'http://www.dippindots.com.au/media/franchise-icon.svg',
            place: 'Dippin Dots',
            scheduledTask: 'Best Steak!',
            remarks: 'I&apos;I think food in here was great!'
        }, {
            id: 2,
            imageSource: 'https://www.iconexperience.com/_img/g_collection_png/standard/512x512/office_building.png',
            place: 'EDCO Building',
            scheduledTask: 'UI/UX Design',
            remarks: 'Remember the agreement on the UI?UX design? Meeting is urgent!'
        }, {
            id: 3,
            imageSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Round_Landmark_Icon_Park.svg/2000px-Round_Landmark_Icon_Park.svg.png',
            place: 'ACO Park',
            scheduledTask: 'Bicycle riding',
            remarks: 'Unwind and do what makes you happy, chill and enjoy the view here'
        }, {
            id: 4,
            imageSource: 'https://image.flaticon.com/icons/png/128/45/45873.png',
            place: 'Travel Ticks',
            scheduledTask: 'Via Birungs B-day',
            remarks: 'Do you have any ideas what we can get Via for her birthday? How about a Tour Ticket?'
        },  {
            id: 5,
            imageSource: 'http://mckenzielandscaping.ca/file/2015/01/iconmonstr-photo-camera-5-icon-256.png',
            place: 'Street Corner Ave.',
            scheduledTask: 'Photo Session',
            remarks: 'Photoshoot at Eco Park with friends! Cosplay Photshooting!'
        },{
            id: 6,
            imageSource: 'https://strongwork.com/images/home_icon.png',
            place: 'Condo',
            scheduledTask: 'Operation clean place',
            remarks: 'i cant work if my unit was full of mess'
        },
    ]
}