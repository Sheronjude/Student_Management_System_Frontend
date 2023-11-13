import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentsView = () => {
	const [students, setStudents] = useState([]);
	

	

	const loadStudents = async () => {
		try {
            const response = await axios.get("http://localhost:8080/students",
			{
				validateStatus: () => {
					return true;
				}
			});
            console.log(response.data);
			setStudents(response.data);
			
           
        } catch (error) {
            console.error("Error fetching students:", error);
        }
	};

    useEffect(() => {
		loadStudents();
	}, []);
	console.log(students)
	

	return (
		<section>
			
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Depatment</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{students.map((student, index) => (
							<tr key={student.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{student.firstName}</td>
								<td>{student.lastName}</td>
								<td>{student.email}</td>
								<td>{student.department}</td>
								<td className="mx-2">
									
										<FaEye />
									
								</td>
								<td className="mx-2">
								
										<FaEdit />
									
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger">
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default StudentsView;