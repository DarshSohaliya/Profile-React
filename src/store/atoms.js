import {atom} from 'recoil'

export const useProfile = atom({
    key:'useProfile',
    default:{
        name:'Joy',
        Photo:'1.4K',
         Followers:'80K',
        Like:58,
        country:"India",
        imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTtlOwG_6l93Lo3NcGZcQpGx4LXNwa3lF5A&usqp=CAU'
        
    }
})