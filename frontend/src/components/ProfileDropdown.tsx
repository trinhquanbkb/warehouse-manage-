import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";
import FeatherIcon from "feather-icons-react";
import { logoutUser } from "../redux/auth/reducers";
import { getLoggedInUser } from "../utils/getLoggedInUser";

interface ProfileMenuItem {
	label: string;
	icon: string;
	redirectTo: string;
}

interface ProfileDropdownProps {
	menuItems: Array<ProfileMenuItem>;
	profilePic?: string;
	username: string;
}

const ProfileDropdown = (props: ProfileDropdownProps) => {
	const profilePic = props.profilePic || null;
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const dispatch = useDispatch();
	const history = useHistory();
	/*
	 * toggle profile-dropdown
	 */
	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleLogout = () => {
		dispatch(logoutUser({ history }));
	};

	return (
		<Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
			<Dropdown.Toggle
				id="dropdown-profile"
				as="a"
				onClick={toggleDropdown}
				className={classNames(
					"nav-link",
					"nav-user",
					"me-0",
					"cursor-pointer",
					{ show: dropdownOpen }
				)}
			>
				<img src={profilePic!} className="rounded-circle" alt="" />
				<span className="pro-user-name ms-2">
					<span className="fw-bold">
						{getLoggedInUser().username}
					</span>
					<i className="uil uil-angle-down"></i>
				</span>
			</Dropdown.Toggle>
			<Dropdown.Menu className="dropdown-menu-end profile-dropdown">
				<div onClick={toggleDropdown}>
					<div className="dropdown-header noti-title">
						<h6 className="text-overflow m-0">Xin chào !</h6>
					</div>
					{(props.menuItems || []).map((item, i) => {
						if (item.label === "Logout") {
							return (
								<React.Fragment key={i}>
									{i === props.menuItems.length - 1 && (
										<div className="dropdown-divider"></div>
									)}
									<Link
										onClick={() => {
											handleLogout();
										}}
										to={item.redirectTo}
										className="dropdown-item notify-item"
										key={i + "-profile-menu"}
									>
										<FeatherIcon
											icon={item.icon}
											className="icon-dual icon-xs me-1"
										/>
										<span>{item.label}</span>
									</Link>
								</React.Fragment>
							);
						} else {
							return (
								<React.Fragment key={i}>
									{i === props.menuItems.length - 1 && (
										<div className="dropdown-divider"></div>
									)}
									<Link
										to={item.redirectTo}
										className="dropdown-item notify-item"
										key={i + "-profile-menu"}
									>
										<FeatherIcon
											icon={item.icon}
											className="icon-dual icon-xs me-1"
										/>
										<span>{item.label}</span>
									</Link>
								</React.Fragment>
							);
						}
					})}
				</div>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default ProfileDropdown;
