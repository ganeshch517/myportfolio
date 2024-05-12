 
export interface IProject {
    id: number;
    bannerImageURL: string;
    title: string;
    description: string;
    fadeStyle?: string;
    technologiesUsed?: string;
}

export default class Projects {

    projects: IProject[] = [];
    
    constructor() {
    this.projects = [
        {
            id: 1,
            title: 'Vocabulary Application',
            description: 'Vocabulary Application is used to find the meaning of a word. On adding a word in the Search bar, application fetches the information about that word from Oxford Dictionaries API and shows it in our application.',
            bannerImageURL: 'assets/Vocabulary.png',
            technologiesUsed: 'Angular, Bootstrap, Typescript',
            fadeStyle: 'fade-right'
        },
        {
            id: 2,
            title: 'Notes Holder',
            description: 'Notes Holder Application is a Angular and Spring Boot application used for adding notes and maintaining it user-wise. Notes can be added along with the category and also notes description can be updated with live markdowns preview.',
            bannerImageURL: 'assets/NotesHolder.png',
            technologiesUsed: 'Angular, Spring Boot, Spring data JPA, Bootstrap, SQL Server',
            fadeStyle: 'fade-up'
        },
        {
            id: 3,
            title: 'Disney+',
            description: 'Disney+ is an Angular application which has the Google Sign-in functionality and also the home page which displays various categories of films with styled components of Angular.',
            bannerImageURL: 'assets/disney2.png',
            technologiesUsed: 'Angular, Bootstrap',
            fadeStyle: 'fade-left'
        },
        {
            id: 4,
            title: 'URL Shortener',
            description: 'URL Shortener is a Spring Boot Application which has Login authentication fuctionality with JWT tokens and it shortens the given full URL and generates the short URL and stores it in the SQL Server. It also captures the number of clicks on the short URL generated',
            bannerImageURL: 'assets/URLShortener.png',
            technologiesUsed: 'Angular, Spring Boot, SQL Server, Spring data JPA',
            fadeStyle: 'fade-right'
        },
        {
            id: 5,
            title: 'New York Times News',
            description: 'New York Times News application is an Angular application which retrives the daily news from new york times API and displays it in the UI',
            bannerImageURL: 'assets/NewYorkTimes.png',
            technologiesUsed: 'Angular, Typescript',
            fadeStyle: 'fade-down'
        },
        {
            id: 6,
            title: 'SpaceX Launches',
            description: 'SpaceX Lauches is a Vanilla Javascript application that provides the information about the Lauched space vehicles from spacexdata API and displays it in the UI. Pagination functionality is included in the application',
            bannerImageURL: 'assets/spaceXLaunches.png',
            technologiesUsed: 'Angular, Typescript',
            fadeStyle: 'fade-left'
        }
    ]
    }

}