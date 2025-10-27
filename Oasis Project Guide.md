# Oasis Project
### Roommate Tracker

## Development Goals

### Frontend

- Login Prompt with Google API
- Create Room Button 
- User Account/Profile Customization
	- * Username
	- * password
	- * email
	- * phone

- Leave/Kick from rooms
- Invite Req/Links
- Promote to leader button --> default to longest tenure 
- Default leader/admin to room creator

### Backend
- Authentication
	- id
	- password
	- email
	- phone


- Room Data
	- Hashmap -> users []
	- room_code: int = len(6)
	- Hashmap => 
	constructor Chore {
	* task_title: str = ""
	descr: str = ""
	* freq: int = 0
	* time_type: X (str/int)
	completion: bool = false
	tags: [enums]
	}

- Users Data
	constructor User {
	id = ""
	username: str = name --> MAYBE (Required Unqiueness) maybe use Google API to make sure no username is used twice. 
	name: str = ""
	email: str = ""
	phone: int/str
	living_time: date/int/str
	rooms = [list of rooms]
	}




