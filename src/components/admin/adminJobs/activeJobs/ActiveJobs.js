import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import locale from "../../../../i18n/locale";
import { useDispatch } from "react-redux";
import { getAllJobs, getJobCount } from "../../../../redux/admin/jobsSlice";
import JobCard from "../JobCard";
import { setAlert, setLoading } from "../../../../redux/configSlice";
import { ALERT_TYPE, ERROR_MSG } from "../../../../utils/Constants";
// import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  getTalentJobStatusApplications,
  getTalentJobStatusCount,
} from "../../../../redux/employer/myJobsSlice";
import CustomDialog from "../../../common/CustomDialog";
import ManageJob from "../../../employer/myJobs/ManageJob";
// import { getAllJobs } from "../../../redux/guest/jobsSlice";

const StyledSelect = styled(Select)(({ theme }) => ({
  width: "49%",
  // marginRight: '16px',
  borderRadius: "20px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.black,
  },
}));

const Scroll = styled(InfiniteScroll)(({ theme }) => ({
  "& .infinite-scroll-component__outerdiv": {
    width: "inherit",
  },
}));

export default function ActiveJobs() {
  const i18n = locale.en;
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [allJobs, setAllJobs] = useState([]);
  const dispatch = useDispatch();
  const [lastKey, setLastKey] = useState("");
  const [totalJob, setTotalJob] = useState(0);
  const [openManageJobDialog, setOpenManageJobDialog] = useState(false);
  const [talents, setTalents] = useState([]);
  const [jobId, setjobId] = useState();

  let lastkey = useRef(0);

  const onHandleManageTalent = (activeJobId) => {
    navigate(`${pathname}/${activeJobId}`);
  };

  const onHandleClose = () => {
    setOpenManageJobDialog(false);
  };

  const getTalentStatusApplications = async (
    jobId,
    jobStatusId,
    manageStatus
  ) => {
    try {
      const [manage] = await Promise.all([
        dispatch(
          getTalentJobStatusApplications({
            job_id: jobId,
            job_status_id: jobStatusId,
          })
        ),
      ]);
      lastkey += 1;
      setTalents((prevTalents) => {
        const updatedTalents = manageStatus?.map((item) => {
          if (item.id === jobStatusId) {
            return {
              ...item,
              items: manage?.payload?.data,
            };
          } else {
            const existingItem = prevTalents.find(
              (prevItem) => prevItem.id === item.id
            );
            return { ...item, items: existingItem ? existingItem.items : [] };
          }
        });
        return [...updatedTalents];
      });
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(
        setAlert({
          show: true,
          type: ALERT_TYPE.ERROR,
          msg: ERROR_MSG,
        })
      );
    }
  };

  const getTalentMyJobStatusCount = async (jobId) => {
    try {
      const [manage] = await Promise.all([
        dispatch(getTalentJobStatusCount({ job_id: jobId })),
      ]);
      console.log(manage.payload.data);
      manage.payload.data.map((item) => {
        item.count > 0
          ? getTalentStatusApplications(jobId, item.id, manage.payload.data)
          : setTalents((prevTalents) => {
              const updatedTalents = manage.payload.data?.map((item) => {
                const existingItem = prevTalents.find(
                  (prevItem) => prevItem.id === item.id
                );
                return {
                  ...item,
                  items: existingItem ? existingItem.items : [],
                };
              });
              return [...updatedTalents];
            });
      });
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(
        setAlert({
          show: true,
          type: ALERT_TYPE.ERROR,
          msg: ERROR_MSG,
        })
      );
    }
  };

  const showManageJob = (jobId) => {
    setOpenManageJobDialog(true);
    getTalentMyJobStatusCount(jobId);
    setjobId(jobId);
  };

  const getJobList = async (lastkeyy) => {
    console.log("LAST KEY", lastkeyy);
    const { payload } = await dispatch(getAllJobs(lastkeyy + "&status_id=2"));
    if (payload?.status == "success") {
      setLastKey(payload.data[payload.data.length - 1]?.job_id);
      setAllJobs((prevState) => [...prevState, ...payload.data]);
    } else {
      dispatch(
        setAlert({
          show: true,
          type: ALERT_TYPE.ERROR,
          msg: "Something went wrong! please relaod the window",
        })
      );
    }
  };

  const JobCount = async () => {
    const response = await dispatch(getJobCount(2));
    setTotalJob(response.payload.count);
  };
  useEffect(() => {
    getJobList(lastKey);
    JobCount();
  }, []);

  return (
    <Box sx={{ ml: 6 }}>
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: 700,
          // ml: 6
        }}
      >
        {i18n["activeJobs.title"]} ({totalJob})
      </Typography>
      {/* <Box sx={{
                mt: 1,
            }}>
                <StyledSelect
                    sx={{ mr: 1 }}
                    value={10}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'stack' }}
                    size="small">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Quick search</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </StyledSelect>
                <StyledSelect
                    sx={{ ml: 1 }}
                    value={10}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'filter' }}
                    size="small">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Select manager</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </StyledSelect>
            </Box>
            <Box sx={{
                mt: 1,
            }}>
                <StyledSelect
                    sx={{ mr: 1 }}
                    value={10}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'stack' }}
                    size="small">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Select stage</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </StyledSelect>
                <StyledSelect
                    sx={{ ml: 1 }}
                    value={10}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'filter' }}
                    size="small">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Select type</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </StyledSelect>
            </Box>
            <Button variant="contained" color="redButton" sx={{ width: '30%', mt: 2 }}>{i18n['activeJobs.update']}</Button> */}
      <Grid
        container
        spacing={2}
        flexDirection={"column"}
        sx={{
          display: { xs: "none", md: "flex" },
          marginTop: "30px",
        }}
      >
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={allJobs.length}
          next={() => getJobList(lastKey)}
          hasMore={true}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Box
            sx={{
              mt: 2,
            }}
          >
            {allJobs?.map((job, index) => (
              <JobCard
                key={index}
                index={job.job_id}
                jobContent={job}
                onManageTalent={onHandleManageTalent}
                showManageJob={() => showManageJob(job.job_id)}
              />
            ))}
          </Box>
        </InfiniteScroll>
      </Grid>
      <CustomDialog
        show={openManageJobDialog}
        onDialogClose={onHandleClose}
        // title={i18n["manageJob.title"]}
        isTalentMyJobsDialog
      >
        <ManageJob jobId={jobId} talents={talents} setTalents={setTalents} />
      </CustomDialog>
    </Box>
  );
}
