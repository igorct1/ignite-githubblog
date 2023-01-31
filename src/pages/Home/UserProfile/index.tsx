import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LoadingContainer } from "../../../components/Loading/styles";
import { api } from "../../../lib";
import { ProfileDetails, ProfileImage, UserProfileContainer } from "./styles";
const username = "igorct1";

interface ProfileProps {
  name: string;
  login: string;
  bio: string;
  followers: number;
  company?: string;
  avatar_url: string;
  html_url: string;
}

export function UserProfile() {
  const [profileData, setProfileData] = React.useState<ProfileProps>(
    {} as ProfileProps
  );

  const [isLoading, setLoading] = React.useState(false);
  const getProfileData = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`users/${username}`);
      setProfileData(response.data);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getProfileData();
  }, []);
  return (
    <UserProfileContainer>
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <>
          <ProfileImage src={profileData.avatar_url} />
          <ProfileDetails>
            <header>
              <h1>{profileData.name}</h1>
              <a href={profileData.html_url} target="__blank">
                github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </header>
            <p>{profileData.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              {profileData.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profileData.company}
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers} seguidores
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </UserProfileContainer>
  );
}
