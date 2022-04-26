import { useState, useRef } from "react";
import {Box , TextField} from "@material-ui/core";
import {makeStyles, styled} from "@material-ui/styles";
import Tags from './Tags';

const useStyles = makeStyles(theme =>({
    box:{
        flexGrow:1,
    },
    tagsContainer:{
        margin: "0 0.2rem 0 0",
        display: "flex"
    },
    div:{
        "& .MuiInputBase-input":{
            color: "#ffffff",
        },
        "& .MuiFormLabel-root":{
            color:"#ffffff",
        }
    },
}));
const CustomTextField = styled(TextField)({
    marginTop:'1rem',
    marginBottom:'1rem',
    '& .MuiInputBase-input': {
        // backgroundColor:'rgba(116,132,157,.2)'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#74849D',
        },
        '&:hover fieldset': {
            borderColor: '#74849D',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#04C9B7',
        },
    },
});

const InputTags = (props) =>{
    const classes = useStyles();
    const [tags, SetTags] = useState([]);
    const tagRef = useRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        SetTags([...tags, props.value]);
        props.value.current.value = "";
    };
    const handleDelete = (value) => {
        const newtags = tags.filter((val) => val !== value);
        SetTags(newtags);
    };
    return(
        <Box className={classes.box}>
            <form onSubmit={handleOnSubmit}>
                <CustomTextField
                    // inputRef={tagRef}
                    id={props.id}
                    name={props.name}
                    className={classes.div}
                    fullWidth
                    variant='outlined'
                    margin='none'
                    label ="Enter Course Tags"
                    value={props.value}
                    onChange={props.onChange}
                    error={props.error}
                    helperText={props.helperText}
                    InputProps={{
                        startAdornment: (
                            <Box className={classes.tagsContainer}>
                                {tags.map((value, index) => {
                                    return (
                                        <Tags data={value} handleDelete={handleDelete} key={index} />
                                    );
                                })}
                            </Box>
                        ),
                    }}
                />
            </form>
        </Box>
    )
}
export default InputTags;