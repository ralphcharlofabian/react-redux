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
                isCompleted: false
            },
            {
                taskId: 2,
                task: 'Do Graphic Artworks',
                isCompleted: true
            },            
            {
                taskId: 3,
                task: 'Repack Tavel Baggage',
                isCompleted: false
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
                isCompleted: false
            },
            {
                taskId: 2,
                task: 'Film new tutorials on youtube',
                isCompleted: true
            },            
            {
                taskId: 3,
                task: 'Update GitHub',
                isCompleted: false
            },            
            {
                taskId: 4,
                task: 'Check Emails and Inquiry about React tutorial',
                isCompleted: true
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
                isCompleted: false
            },
            {
                taskId: 2,
                task: 'Day tour with friends',
                isCompleted: true
            },            
            {
                taskId: 3,
                task: 'Sideline street photography',
                isCompleted: false
            },            
            {
                taskId: 4,
                task: 'Attend reunion',
                isCompleted: true
            }]
        },
         {
            id:4,
            firstName:'Des',
            lastName:'Bernardo',
            age:29,
            description:'Software Engineer | Food lover | Blogger',
            img:'https://pbs.twimg.com/profile_images/449856612/cubegirl-avatar_400x400.jpg',
             taskToDo: [{
                taskId: 1,
                task: 'Do programable hardware for client',
                isCompleted: false
            },
            {
                taskId: 2,
                task: 'Check and visit new restaurant at Madeline st.',
                isCompleted: true
            },            
            {
                taskId: 3,
                task: 'Create Blog regarding self-motivation',
                isCompleted: false
            },            
            {
                taskId: 4,
                task: 'Attend wedding ceremony of friend',
                isCompleted: true
            },            
            {
                taskId: 5,
                task: 'Chill at bar',
                isCompleted: true
            }]
        },
    ]
}