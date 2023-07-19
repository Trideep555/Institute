import { UserCard } from "react-ui-cards";

function InsGrpCards(){
    return(<>
    <UserCard
    float
    href='https://github.com/nukeop'
    header='https://i.imgur.com/p5yXGQk.jpg'
    avatar='https://i.imgur.com/kFkyYkZ.jpg'
    name='Class 10'
    positionName='Physics'
    stats={[
        {
            name: 'Students',
            value: 365
        },
        {
            name: 'Teachers',
            value: 110
        },
        {
            name: 'Activites',
            value: 54
        }
    ]}
/>
    </>)
}
export default InsGrpCards;