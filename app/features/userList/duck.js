//action
export function selectUser(user) {
    return {
        type: 'userSelected',
        payload: user
    }
};
export function rawData(){
    return [
        {
            id:1,
            firstName:'RC',
            lastName:'Fabian',
            age:27,
            description:'Full-stack Web Developer | Graphic Artist | Motivational Speaker | Traveler',
            img:'https://lh3.googleusercontent.com/-N8usd-ekiCM/AAAAAAAAAAI/AAAAAAAAAAA/Lk6FsRVAfWk/photo.jpg',
             taskToDo: [{
                taskId: 1,
                task: 'Study React + Redux',
                isCompleted: false,
                dueDate:'2018-10-22'
            },
            {
                taskId: 2,
                task: 'Do Graphic Artworks',
                isCompleted: true,
                dueDate:'2018-3-20'
            },            
            {
                taskId: 3,
                task: 'Repack Tavel Baggage',
                isCompleted: false,
                dueDate:'2017-3-21'
            }]
        },
         {
            id:2,
            firstName:'Bucky',
            lastName:'Roberts',
            age:30,
            description:'React Developer | Youtuber',
            img:'https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png',
             taskToDo: [{
                taskId: 1,
                task: 'Teach React + Redux',
                isCompleted: false,
                dueDate:'2016-1-21'
            },
            {
                taskId: 2,
                task: 'Film new tutorials on youtube',
                isCompleted: true,
                dueDate:'2018-3-1'
            },            
            {
                taskId: 3,
                task: 'Update GitHub',
                isCompleted: false,
                dueDate:'2018-12-21'
            },            
            {
                taskId: 4,
                task: 'Check Emails and Inquiry about React tutorial',
                isCompleted: true,
                dueDate:'2018-10-22'
            }]
        },
         {
            id:3,
            firstName:'Taka',
            lastName:'Himura',
            age:25,
            description:'UI/UX Designer | Traveler | Artist',
            img:'https://www.exclutips.com/wp-content/uploads/2015/08/wordpress-custom-user-avatar.png',
             taskToDo: [{
                taskId: 1,
                task: 'Create UI/UX design for new client website',
                isCompleted: false,
                dueDate:'2017-8-14'
            },
            {
                taskId: 2,
                task: 'Day tour with friends',
                isCompleted: true,
                dueDate:'2018-11-22'
            },            
            {
                taskId: 3,
                task: 'Sideline street photography',
                isCompleted: false,
                dueDate:'2018-2-22'
            },            
            {
                taskId: 4,
                task: 'Attend reunion',
                isCompleted: true,
                dueDate:'2018-10-14'
            }]
        },
         {
            id:4,
            firstName:'Via',
            lastName:'Birung',
            age:29,
            description:'Architect | Food lover | Blogger',
            img:'https://pbs.twimg.com/profile_images/449856612/cubegirl-avatar_400x400.jpg',
             taskToDo: [{
                taskId: 1,
                task: 'Do house design for client',
                isCompleted: false,
                dueDate:'2018-10-22'
            },
            {
                taskId: 2,
                task: 'Check and visit new restaurant at Madeline st.',
                isCompleted: true,
                dueDate:'2018-3-12'
            },            
            {
                taskId: 3,
                task: 'Create Blog regarding self-motivation',
                isCompleted: false,
                 dueDate:'2018-10-22'
            },            
            {
                taskId: 4,
                task: 'Attend wedding ceremony of friend',
                isCompleted: true,
                 dueDate:'11/5/2018'
            },            
            {
                taskId: 5,
                task: 'Chill at bar',
                isCompleted: true,
                 dueDate:'1/20/2018'
            }]
        },
    ]
}