import React,{useEffect,useState} from 'react';
import axios from 'axios';

//changed class based component into functional component
export default function DiscordCommunity(){

  const [discord, setDiscord] = useState(null);
  const [DiscordError, setDiscordError] = useState("");
  const [DiscordLoading, setDiscordLoading] = useState(false);

  useEffect(() => {
    handleDiscord();
    
  }, []);

  const handleDiscord = async () => {
    setDiscordLoading(true);
    try {
      const result = await axios.get(
        "http://localhost:8000/api/discord_links/"
      );
      setDiscord(result.data.json());
      console.log(result.data)
    } catch (err) {
      setDiscordError(err.message || "Unexpected Error!");
    } finally {
      setDiscordLoading(false);
    }
  };

  const discordlist = discord.map(discord =>

    <div>
    {discord.title}
  </div>

    );

  return (
      <div>

      <div className = "discord_community--title">CS Discord Channels at ULM</div>
      <div className='discord_container'>

        <div className="discord_container--item1">  

          <a href='https://discord.com/' className = "card">   
            <div className = "background_cover"></div>
              <article> 
                    <h1>Discord 1</h1>
                    <p class ="item--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea tempora 
                  culpa delectus. Inventore suscipit pariatur aperiam, natus odio perspiciatis 
                  incidunt illo! Similique nesciunt porro consequuntur eum, provident voluptas 
                  itaque?</p>
                  <button className = "card--btn">View More</button>
              </article>
            </a>

        </div>

        {discordlist}

        
      </div>
      </div>


        

      
  )
}

