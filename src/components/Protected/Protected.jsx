import {Navigate} from 'react-router-dom';

export default function Protected({children,role}){
	const userrole=localStorage.getItem("role")
	if(userrole !== role){
		   return <Navigate to="/login" replace />
	}
	return children
}