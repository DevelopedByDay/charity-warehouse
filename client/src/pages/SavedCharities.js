// import React from 'react';
// import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { QUERY_ME } from '../utils/queries';
// import { REMOVE_CHARITY } from '../utils/mutations';
// import { removeCharityId } from '../utils/localStorage';
// import Auth from '../utils/auth'

// const SavedCharities = () => {
//     const { loading, data } = useQuery(QUERY_ME);
//     const [removeCharity, { error }] = useMutation(REMOVE_CHARITY);
  
//     const userData = data?.me || {};
  
//     // create function that accepts the charity's mongo _id value as param and deletes the charity from the database
//     const handleDeleteCharity = async (charityId) => {
//       // get token
//       const token = Auth.loggedIn() ? Auth.getToken() : null;
  
//       if (!token) {
//         return false;
//       }
  
//       try {
//         const { data } = await removeCharity({
//           variables: { charityId },
//         });
  
//         // upon success, remove charity's id from localStorage
//         removeCharityId(charityId);
//       } catch (err) {
//         console.error(err);
//       }
//     };
  
//     if (loading) {
//       return <h2>LOADING...</h2>;
//     }
  
//     return (
//       <>
//         <Jumbotron fluid className='text-light bg-dark'>
//           <Container>
//             <h1>Viewing {userData.username}'s charities!</h1>
//           </Container>
//         </Jumbotron>
//         <Container>
//           <h2>
//             {userData.savedCharities?.length
//               ? `Viewing ${userData.savedCharities.length} saved ${
//                   userData.savedCharities.length === 1 ? 'charity' : 'charities'
//                 }:`
//               : 'You have no saved charities!'}
//           </h2>
//           <CardColumns>
//             {userData.savedCharities?.map((charity) => {
//               return (
//                 <Card key={charity.id} border='dark'>
//                   <Card.Body>
//                     <Card.Title>{charity.name}</Card.Title>
//                     <Card.Text>{charity.misson}</Card.Text>
//                     <Card.Text>{charity.url}</Card.Text>
//                     <Button
//                       className='btn-block btn-danger'
//                       onClick={() => handleDeleteCharity(charity.id)}>
//                       Delete this Charity!
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               );
//             })}
//           </CardColumns>
//         </Container>
//       </>
//     );
//   };
  
//   export default SavedCharities;