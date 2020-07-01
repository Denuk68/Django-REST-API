import React from "react";


class UserItem extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="priority-200">
                        <td className="name">TESmart KVM Switch HDMI Device</td>
                        <td className="clicks">857</td>
                        <td className="priority"><i className="fas fa-circle"></i> 200</td>
                        <td className="impressions">190</td>
                        <td className="delete"><button className="delete-btn"><i className="fas fa-trash-alt" title="delete row"></i></button></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default UserItem;