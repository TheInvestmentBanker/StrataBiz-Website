import React from 'react';
import { useEffect } from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue } from '@chakra-ui/react';

const SocialTabs = () => {
  const borderColor = useColorModeValue('#f7f6f7', '#001d3c');
  const cardBgColor = useColorModeValue('#ffffff', '#002b5d');
  const shadowColor = useColorModeValue('md', 'dark-lg');

  useEffect(() => {
    // Ensure Instagram embeds are properly rendered
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Box borderWidth="1px" borderColor={borderColor} borderRadius="md" boxShadow={shadowColor} p={4}>
      <Tabs variant="soft-rounded" colorScheme="teal">
        <TabList>
          <Tab>Instagram</Tab>
          <Tab>LinkedIn</Tab>
          <Tab>X (Twitter)</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
              {/* Instagram Post Embed */}
              <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C_YdzptTAM2/" style={{ background: '#FFF', border: '0', borderRadius: '8px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: '100%' }}>
                <div style={{ padding: '16px' }}>
                  <a href="https://www.instagram.com/p/C_YdzptTAM2/" style={{ background: '#FFFFFF', lineHeight: '0', padding: '0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: '0', height: '40px', marginRight: '14px', width: '40px' }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', justifyContent: 'center' }}>
                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', marginBottom: '6px', width: '100px' }}></div>
                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', width: '60px' }}></div>
                      </div>
                    </div>
                    <div style={{ padding: '19% 0' }}></div>
                    <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                      <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                            <g>
                              <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.874,30.349 C512.118,32.258 511.611,34.438 511.467,37.631 C511.325,40.831 511.293,41.891 511.293,50 C511.293,58.147 511.325,59.17 511.467,62.369 C511.611,65.562 512.118,67.743 512.874,69.651 C513.654,71.623 514.68,73.298 516.035,74.965 C517.703,76.632 519.376,77.658 521.349,78.425 C523.257,79.166 525.438,79.674 528.631,79.82 C531.831,79.967 532.853,80 541,80 C549.148,80 550.169,79.967 553.369,79.82 C556.562,79.674 558.743,79.166 560.652,78.425 C562.623,77.658 564.297,76.632 565.965,74.965 C567.633,73.298 568.659,71.623 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631 M553.369,30.18 C556.828,30.322 558.258,30.795 560.652,31.86 C563.075,32.918 564.297,34.589 565.965,37.631 C567.633,40.658 568.659,42.72 569.425,44.566 C570.167,46.423 570.674,48.604 570.82,51.769 C570.966,54.993 571,55.939 571,50 C571,44.075 570.966,43.016 570.82,39.905 C570.674,36.684 570.167,34.396 569.425,32.338 C568.659,30.5 567.633,28.824 565.965,27.158 C564.297,25.493 562.623,24.466 560.652,23.735 C558.258,22.796 556.828,22.323 553.369,22.18 C549.877,22.036 548.248,22.51 541,22.51 C533.748,22.51 532.176,22.036 528.674,22.18 C525.168,22.323 523.696,22.796 521.349,23.735 C519.085,24.466 517.389,25.493 516.035,27.158 C514.68,28.824 513.654,30.5 512.874,32.338 C512.118,34.396 511.611,36.684 511.467,39.905 C511.325,43.016 511.293,44.075 511.293,50 C511.293,55.939 511.325,54.993 511.467,51.769 C511.611,48.604 512.118,46.423 512.874,44.566 C513.654,42.72 514.68,40.658 516.035,37.631 C517.389,34.589 519.085,32.918 521.349,31.86 C523.746,30.795 525.177,30.322 528.631,30.18 C532.125,30.037 533.72,30 541,30 C548.273,30 549.885,30.037 553.369,30.18" />
                        </g>
                      </g>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </blockquote>
              <script async src="https://platform.instagram.com/en_US/embeds.js" charset="utf-8"></script>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              {/* LinkedIn Post Embed */}
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7234619084707913729"
                height="600"
                width="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="LinkedIn Post"
                style={{ border: 'none', borderRadius: '8px' }}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              {/* Twitter/X Post Embed */}
              <blockquote class="twitter-tweet">
                <p lang="zxx" dir="ltr">
                  <a href="https://t.co/oJoMGstIHu">pic.twitter.com/oJoMGstIHu
                  </a></p>&mdash; Elon Musk (@elonmusk) 
                  <a href="https://twitter.com/elonmusk/status/1832559292437692747?ref_src=twsrc%5Etfw">September 7, 2024
                  </a></blockquote> 
                  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
                  </script>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SocialTabs;
