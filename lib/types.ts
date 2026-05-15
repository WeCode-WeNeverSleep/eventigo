export interface ApiRoom {
  id: string;
  name: string;
}

export interface ApiSpeaker {
  id: string;
  fullName: string;
  profilePictureUrl: string;
  bio: string;
  externalLinks: string[];
  sessions?: ApiSession[];
}

export interface ApiSession {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  room: ApiRoom;
  capacity: number;
  isLive: boolean;
  speakers: ApiSpeaker[];
}

export interface ApiEvent {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  sessions: ApiSession[];
}
