import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DetailsTabSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="detaisTabSection">
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divide' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary"
        indicatorColor="secondary">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Benefits" {...a11yProps(1)} />
          <Tab label="Direction Of Use" {...a11yProps(2)} />
          <Tab label="Other Information" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      It's time to play nice. Infused with radiance-boosting minerals, These pigments sweep on weightless, And a soft veil of color. The ultra-light, Micronized pigments of these shades blend effortlessly into the skin and give you a buildable coverage!
<br /> <br />
Silky finish
Long-wearing formula
Enriched with radiance-boosting minerals
Made in Australia
Available in various shades

it is unparalleled. The key ingredient has hepatoprotective property. It inhibits the elevation of malondialdehyde levels in plasma and hepatic cells.
<br /> <br />
This product provides a dominant color and a subtle color for blending and softening edges. Infused with radiance-boosting minerals, These pigments sweep on weightless, And a soft veil of color. The ultra-light, Micronized pigments of these shades blend effortlessly into the skin and give you a buildable coverage!
      </TabPanel>
      <TabPanel value={value} index={1}>
      Every girl has that one makeup product without which she can’t leave her house. If you’re anything alike, you would agree to keep yourself looking fresh-faced all day. Its weightless formula feels feathery light on your skin, which makes blending a dream come true. Being a super hydrating formula it's non-drying and melts into your skin. You can take your pick from various shades that are made to suit all types of Indian skin tones and undertones, while delivering a seamless finish. Long-lasting and non-transferable, it just ticks all the boxes! <br /><br />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <br />
     <b>Step 1: </b> Take a small amout of product. <br /> <br />


<b>Step 2:</b> Apply it all over the desired area.<br /> <br />


<b>Step 3:</b> Blend it well and create your look.<br /> <br />


<b>Step 4:</b> Voila! You're ready.<br /> <br />
      </TabPanel>

      <TabPanel value={value} index={3}>

      Explore its entire range available on Frank Body. Shop more for products here. <br />
Alternatively, you can also find many more products. <br /><br />


<b>Expiry Date:</b> 15 October 2025 <br />

<b>Country of Origin:</b> Australia <br /> <br />

<b>Manufacturer:</b>  Frank Body Pvt Ltd <br />
<b>Address:</b>  New Delhi India

<br /> <br /> <br />



      </TabPanel>
    </Box>
      </div>
    </>
  );
}