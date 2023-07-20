import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
// import job_logo from 'E:/iView Labs/Crayon-newbuild-frontend-master/src/assets/job_logo.svg';
import job_logo from '../../../assets/job_logo.svg'
import job_volume from '../../../assets/job_volume.svg';
import job_star from '../../../assets/job_star.svg';
import job_star_selected from '../../../assets/job_star_selected.svg';
import job_exp from '../../../assets/job_exp.png';
import job_apply from '../../../assets/job_apply.svg';
import flip_arrow from '../../../assets/flip_arrow.svg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import locale from '../../../i18n/locale.js'
import SingleRadialChart from '../../common/SingleRadialChart';
import SmallButton from '../../common/SmallButton';
import CustomCard from '../../common/CustomCard';
import PlaceIcon from '@mui/icons-material/Place';
import TextWrapper from '../../common/TextWrapper';
import { convertDatetimeAgo } from '../../../utils/DateTime';

const label1 = 'applied';
const label2 = 'shortlisted';
const label3 = 'interviewed';

export default function Frontside({ index, job, setisFlipped }) {
    const i18n = locale.en;
    const theme = useTheme()

    const [colorKey, setColorKey] = useState('color')
    const [chartData1, setChartData1] = useState([320])
    const [chartData2, setChartData2] = useState([11])
    const [chartData3, setChartData3] = useState([3])
    const [isHovered, setIsHovered] = useState(false)
    const [isStar, setIsStarSelected] = useState(false)

    const handleHoverEnter = () => {
        setColorKey('hover')
    }
    const handleHoverLeave = () => {
        setColorKey('color')
    }
    const handleStar = () => {
        setIsStarSelected(!isStar)
    }
    const handleClick = (e) => {
        e.preventDefault();
        setisFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    return (
        <>
            <div>
                <CustomCard  handleMouseEnter={() => setIsHovered(true)} handleMouseLeave={() => setIsHovered(false)}>
                    <Grid container padding={1} justifyContent="space-between" alignItems="center" >
                        <Box
                            component="img"
                            sx={{
                                height: 40,
                                width: 40,
                                maxHeight: { xs: 40 },
                                maxWidth: { xs: 40 },
                                ml: 2,
                            }}
                            alt="job_logo"
                            src={job_logo}
                        />
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <SmallButton color='yellowButton100' label={i18n['jobCard.recruit']} mr={1} />
                            {/* <SmallButton color='lightGreenButton300' label={job?.job_status?.name} /> */}
                            <SmallButton color='lightGreenButton300' label="Review" mr={1} />
                            <Box sx={{
                                height: 43,
                                width: 43,
                                maxHeight: { xs: 43 },
                                maxWidth: { xs: 43 },
                                borderRadius: '6px',
                                background: theme.palette.purpleButton300.main,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 5px'
                            }}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 25,
                                        width: 25,
                                        maxHeight: { xs: 25 },
                                        maxWidth: { xs: 25 }
                                    }}
                                    alt="job_volume"
                                    src={job_volume}
                                />
                            </Box>
                            <Box sx={{
                                height: 43,
                                width: 43,
                                maxHeight: { xs: 43 },
                                maxWidth: { xs: 43 },
                                borderRadius: '6px',
                                background: theme.palette.yellowButton100.main,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 5px'
                            }}  onClick={() => setisFlipped(true)}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 25,
                                        width: 25,
                                        maxHeight: { xs: 25 },
                                        maxWidth: { xs: 25 }
                                    }}
                                    alt="flip_arrow"
                                    src={flip_arrow}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    {/* <Grid container padding={0} justifyContent="space-between" alignItems="center">
                <Box sx={{ margin: '-20px 0 -14px -16px', }}>
                    <RadialChart labelsData={labels} series={chartData} width={250} index={index} isHovered={isHovered} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '8px'
                }} onMouseEnter={handleHoverEnter}
                    onMouseLeave={handleHoverLeave}>
                    {CARD_RIGHT_BUTTON_GROUP.map((btn, index) => (
                        <SmallButton color={btn[colorKey]} key={index} label={btn.label} borderTopRightRadius={0}
                            borderBottomRightRadius={0} mb='4px' width={100} p={0} />

                    ))}
                </Box>
            </Grid> */}

                    <Grid marginLeft={1} marginRight={1}>
                        <Typography sx={{
                            fontWeight: 400,
                            fontSize: 12,
                            letterSpacing: '0.75px',
                            opacity: 0.8,
                            marginBottom: '8px'
                        }} >
                            posted {convertDatetimeAgo(job?.updated_at)}
                        </Typography>

                        {/* <TextWrapper line={1} weight={700} size={20} >{job?.title}</TextWrapper> */}
                        <TextWrapper line={1} weight={700} size={25} >Lead Developer Online..</TextWrapper>

                        <Typography sx={{
                            fontWeight: 700,
                            fontSize: 12,
                            marginBottom: '4px',
                            letterSpacing: '0.25px',
                        }} >
                            {/* R{job?.salary?.max} per month */}
                            R75,000 per month
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                            <Box
                                component="img"
                                sx={{
                                    height: 16,
                                    width: 16,
                                    maxHeight: { xs: 15 },
                                    maxWidth: { xs: 15 },
                                    mr: 1,
                                }}
                                alt="job_exp"
                                src={job_exp}
                            />
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: 12,
                                letterSpacing: '0.25px',
                            }} >
                                {job?.experience?.year} years Experience
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                            <IconButton sx={{ padding: 0, marginLeft: '-5px', marginRight: '4px' }} color="redButton100" aria-label="search job" component="button" >
                                <PlaceIcon />
                            </IconButton>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: 12,
                                letterSpacing: '0.25px',
                            }} >
                                {/* {job?.town?.region?.name} */}
                                Cape Town, South Africa
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap:'wrap',gap: 1, marginTop: '-5px' }}>
                            <SmallButton color='blueButton700' height={25} label={i18n['jobCard.fullTime']} mr='4px' />
                            <SmallButton color='blueButton700' height={25} label={i18n['jobCard.remote']} mr='4px' />
                            <SmallButton color='blueButton600' height={25} label={i18n['jobCard.tech']} mr='4px' />
                            <SmallButton color='blueButton600' height={25} label={i18n['jobCard.marketing']} mr='4px' />
                            <SmallButton color='blueButton600' height={25} label={i18n['jobCard.operations']} mr='4px' />
                            {/* <SmallButton color='blueButton700' height={25} label={i18n['jobCard.remote']} mr='4px' /> */}

                            {/* <SmallButton color='blueButton700' height={25} minWidth={60} p={0} label={i18n['jobCard.fullTime']} mr='4px' />
                    <SmallButton color='blueButton700' height={25} minWidth={50} p={0} label={i18n['jobCard.remote']} mr='4px' /> */}
                            {/* <Typography sx={{
                        fontWeight: 600,
                        fontSize: 12,
                        marginTop: '6px',
                        // lineHeight: '15px',
                        opacity: 0.75,
                    }} >
                        ..3more
                    </Typography> */}
                        </Box>

                        <TextWrapper mt='12px'
                            mb={1}
                            color={theme.palette.black100}
                            letterSpacing='0.25px'
                        // >{job?.description}</TextWrapper>
                        >This young, dynamic team is fully immersed in everything that is the internet; always on the pusle of best 
                        practice in order to lead the market...</TextWrapper>

                    </Grid>

                    {/* <Grid container spacing={2} padding='0 8px 8px 8px' justifyContent="space-around" alignItems='center'>
                        <IconButton sx={{
                            border: `1px solid ${theme.palette.grayBorder}`,
                            borderRadius: '8px',
                            width: '37px',
                            height: '37px',
                            ml: 1
                        }} color="redButton100" aria-label="search job" component="button" >
                            <KeyboardArrowLeftIcon />
                        </IconButton>


                        <Box sx={{
                            width: '65%',
                            display: 'flex',
                            overflow: 'hidden'
                        }}>
                            <SmallButton color='purpleButton' height={25} letterSpacing='0' p='3px' label={i18n['jobCard.challengers']} mr='4px' />
                            <SmallButton color='brownButton' height={25} letterSpacing='0' p='3px' label={i18n['jobCard.contemplators']} mr='4px' />
                            <SmallButton color='grayButton200' height={25} letterSpacing='0' p='3px' label={i18n['jobCard.detailed']} mr='4px' textColor='black' />
                            <SmallButton color='grayButton200' height={25} letterSpacing='0' p='3px' label={i18n['jobCard.detailed']} mr='4px' textColor='black' />
                        </Box>


                        <IconButton sx={{
                            border: `1px solid ${theme.palette.grayBorder}`,
                            borderRadius: '8px',
                            width: '37px',
                            height: '37px',
                            mr: 1
                        }} color="redButton100" aria-label="search job" component="button" >
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </Grid> */}

                    <Grid container spacing={2} padding='0 16px 8px 16px' justifyContent="space-around" >
                        <Box sx={{ margin: '0 -22px 0 -22px', }}>
                            <SingleRadialChart max={1000} labelsData={label1} series={chartData1} width={140} color={theme.palette.chart.red} index={index} isHovered={isHovered} />
                        </Box>
                        <Box sx={{ margin: '0 -22px 0 -22px', }}>
                            {/* <SingleRadialChart labelsData={label2} series={[job?.TotalUserShorlisted]} width={140} color={theme.palette.chart.green} index={index} isHovered={isHovered} /> */}
                            <SingleRadialChart labelsData={label2} series={[11]} width={140} color={theme.palette.chart.green} index={index} isHovered={isHovered} />
                        </Box>
                        <Box sx={{ margin: '0 -22px 0 -22px', }}>
                            <SingleRadialChart labelsData={label3} series={chartData3} width={140} color={theme.palette.chart.yellow} index={index} isHovered={isHovered} />
                        </Box>
                    </Grid>

                    <Grid container spacing={2} padding='0 8px 8px 8px' justifyContent="center" alignItems='center'>
                        <Box sx={{
                            height: 43,
                            width: 43,
                            maxHeight: { xs: 43 },
                            maxWidth: { xs: 43 },
                            borderRadius: '6px',
                            background: theme.palette.chart.yellow,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box
                                component="img"
                                sx={{
                                    height: 25,
                                    width: 25,
                                    maxHeight: { xs: 25 },
                                    maxWidth: { xs: 25 }
                                }}
                                alt="job_apply"
                                src={job_apply}
                            />
                        </Box>
                        <Grid sx={{ display: 'flex', justifyContent: 'space-between',  width: '75%', padding: 0, ml: 1 }}>
                            <Button sx={{ boxShadow: 0, fontSize: '12px', width: '90%', height: '43px', mr:1 }} variant='contained' color='redButton100'>{i18n['jobCard.apply']}</Button>
                            {
                                isStar ? <Box
                                    component="img"
                                    sx={{
                                        height: 43,
                                        width: 43,
                                        maxHeight: { xs: 43 },
                                        maxWidth: { xs: 43 },
                                    }}
                                    alt="job_star_selected"
                                    src={job_star_selected}
                                    onClick={handleStar}
                                /> : <Box
                                    component="img"
                                    sx={{
                                        height: 43,
                                        width: 43,
                                        maxHeight: { xs: 43 },
                                        maxWidth: { xs: 43 },
                                    }}
                                    alt="job_star"
                                    src={job_star}
                                    onClick={handleStar}
                                />
                            }
                        </Grid>
                    </Grid>
                </CustomCard>
            </div>

        </>
    );
}