import React from "react";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import HeroName from "./HeroName";

const { Meta } = Card;
interface MyHero {
    hero: HeroName;
}

const App: React.FC<MyHero> = ({ hero }) => (
    <Card
        style={{ width: 300 }}
        cover={
            <img
                alt="example"
                src="https://indiehoy.com/wp-content/uploads/2022/03/the-batman.jpg"
            />
        }
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            avatar={
                <Avatar src="https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png" />
            }
            title={hero.name}
            description={hero.description}
        />
    </Card>
);

export default App;
