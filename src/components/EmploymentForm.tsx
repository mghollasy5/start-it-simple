import React, { useState } from "react";
import { useForm, FormProvider, useFormContext, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { toast } from "sonner";
import { Calendar } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

// State list for the dropdown
const states = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

// Job positions
const positions = [
  "Server",
  "Host",
  "Bartender",
  "Busser/Server Assistant",
  "Line Cook",
  "Production",
  "Dishwasher/Utility",
  "Manager",
];

// Form validation schema
const formSchema = z.object({
  // Personal Information
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  dateOfBirth: z.date({
    required_error: "Please select your date of birth.",
  }),
  streetAddress: z.string().min(2, { message: "Please enter your street address." }),
  aptSuite: z.string().optional(),
  city: z.string().min(2, { message: "Please enter your city." }),
  state: z.string().min(1, { message: "Please select your state." }),
  zipCode: z.string().min(5, { message: "Please enter a valid zip code." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  
  // Eligibility and Availability
  legallyAbleToWork: z.enum(["yes", "no"], {
    required_error: "Please select if you are legally able to work in the US.",
  }),
  position: z.string({
    required_error: "Please select a position.",
  }),
  expectedRate: z.string().min(1, { message: "Please enter your expected hourly rate." }),
  referredBy: z.string().optional(),
  availableDate: z.date({
    required_error: "Please select when you're available to start.",
  }),
  felonyConviction: z.enum(["yes", "no"], {
    required_error: "Please select if you have been convicted of a felony.",
  }),
  availability: z.string().min(1, { message: "Please specify your availability." }),
  hoursPerWeek: z.string().min(1, { message: "Please enter expected hours per week." }),
  
  // Education
  educationLevel: z.enum(["highSchool", "college"], {
    required_error: "Please select your education level.",
  }),
  schoolName: z.string().min(2, { message: "Please enter your school name." }),
  schoolLocation: z.string().min(2, { message: "Please enter your school location." }),
  coursesMajor: z.string().optional(),
  lastYearCompleted: z.string().min(1, { message: "Please enter the last year completed." }),
  completionLevel: z.enum(["diploma", "degree"], {
    required_error: "Please select your completion level.",
  }),
  
  // Employment History 1
  employer1: z.string().min(2, { message: "Please enter your most recent employer." }),
  startDate1: z.date({
    required_error: "Please select your start date.",
  }),
  endDate1: z.date({
    required_error: "Please select your end date.",
  }),
  position1: z.string().min(2, { message: "Please enter your position." }),
  employerAddress1: z.string().min(2, { message: "Please enter employer address." }),
  employerPhone1: z.string().min(10, { message: "Please enter a valid phone number." }),
  
  // Employment History 2
  employer2: z.string().optional(),
  startDate2: z.date().optional(),
  endDate2: z.date().optional(),
  position2: z.string().optional(),
  employerAddress2: z.string().optional(),
  employerPhone2: z.string().optional(),
  
  // Verification
  verificationCode: z.string().min(2, { message: "Please enter any two digits." }),
  agreement: z.boolean()
    .refine(val => val === true, {
      message: "You must agree to the terms to submit the application.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

// Form section component
const FormSection = ({ title, children, active = false, onActivate }: { 
  title: string; 
  children: React.ReactNode;
  active?: boolean;
  onActivate: () => void;
}) => {
  return (
    <div className={cn(
      "mb-8 transition-all duration-300 border rounded-lg overflow-hidden",
      active ? "border-mediterranean-gold shadow-md" : "border-gray-200"
    )}>
      <button
        type="button"
        className={cn(
          "w-full text-left p-4 flex items-center justify-between font-playfair text-lg font-semibold",
          active ? "bg-cafe-gold/10 text-mediterranean-navy" : "bg-gray-50 text-gray-600"
        )}
        onClick={onActivate}
      >
        {title}
        <span className={cn(
          "w-6 h-6 flex items-center justify-center rounded-full text-xs transition-colors",
          active ? "bg-mediterranean-gold text-white" : "bg-gray-200 text-gray-600"
        )}>
          {active ? "✓" : "+"}
        </span>
      </button>
      <div className={cn(
        "transition-all duration-300 ease-in-out", 
        active ? "max-h-[2000px] opacity-100 p-6" : "max-h-0 opacity-0 p-0 pointer-events-none"
      )}>
        {children}
      </div>
    </div>
  );
};

// Address field component for reuse
const AddressFields = ({ prefix, required = true }: { prefix: string; required?: boolean }) => {
  const { control } = useFormContext();
  
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name={`${prefix}Address`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Street Address {required && <span className="text-red-500">*</span>}</FormLabel>
            <FormControl>
              <Input placeholder="123 Main St" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {prefix === "street" && (
        <FormField
          control={control}
          name="aptSuite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apt, Suite, Bldg (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Apt 4B" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          control={control}
          name={prefix === "street" ? "city" : `employer${prefix}City`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>City {required && <span className="text-red-500">*</span>}</FormLabel>
              <FormControl>
                <Input placeholder="Cityville" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name={prefix === "street" ? "state" : `employer${prefix}State`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>State {required && <span className="text-red-500">*</span>}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name={prefix === "street" ? "zipCode" : `employer${prefix}Zip`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code {required && <span className="text-red-500">*</span>}</FormLabel>
              <FormControl>
                <Input placeholder="12345" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

// Date field component for reuse
const DatePickerField = ({ name, label, required = true }: { name: string; label: string; required?: boolean }) => {
  const { control } = useFormContext();
  
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label} {required && <span className="text-red-500">*</span>}</FormLabel>
          <div className="flex gap-2">
            <FormControl>
              <Input
                placeholder="MM/DD/YYYY (e.g., 03/15/1995)"
                value={field.value ? format(field.value, "MM/dd/yyyy") : ""}
                onChange={(e) => {
                  const value = e.target.value;
                  // Parse MM/DD/YYYY format
                  const dateMatch = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
                  if (dateMatch) {
                    const [, month, day, year] = dateMatch;
                    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
                    // Validate the date is reasonable
                    if (date.getFullYear() === parseInt(year) && 
                        date.getMonth() === parseInt(month) - 1 && 
                        date.getDate() === parseInt(day) &&
                        date <= new Date()) {
                      field.onChange(date);
                    }
                  } else if (value === "") {
                    field.onChange(undefined);
                  }
                }}
                className="flex-1"
              />
            </FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="shrink-0"
                >
                  <Calendar className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date > new Date()}
                  defaultMonth={field.value || new Date(1990, 0)} // Start from 1990 for easier navigation
                  captionLayout="dropdown-buttons"
                  fromYear={1940}
                  toYear={new Date().getFullYear()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const EmploymentForm = () => {
  // Track current active section
  const [activeSection, setActiveSection] = useState("personal");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<FormValues | null>(null);
  
  // Define the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dateOfBirth: undefined,
      streetAddress: "",
      aptSuite: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      email: "",
      legallyAbleToWork: undefined,
      position: "",
      expectedRate: "",
      referredBy: "",
      availableDate: undefined,
      felonyConviction: undefined,
      availability: "",
      hoursPerWeek: "",
      educationLevel: undefined,
      schoolName: "",
      schoolLocation: "",
      coursesMajor: "",
      lastYearCompleted: "",
      completionLevel: undefined,
      employer1: "",
      startDate1: undefined,
      endDate1: undefined,
      position1: "",
      employerAddress1: "",
      employerPhone1: "",
      employer2: "",
      startDate2: undefined,
      endDate2: undefined,
      position2: "",
      employerAddress2: "",
      employerPhone2: "",
      verificationCode: "",
      agreement: false,
    },
  });
  
  // Track form progress in session storage
  React.useEffect(() => {
    // Check if user was redirected back after successful submission
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      toast.success("Thank you for your application! We will review it and get back to you soon.", {
        duration: 8000,
      });
      // Clean up the URL parameter
      window.history.replaceState({}, '', '/employment');
    }
    
    // Load saved form data from session storage
    const savedData = sessionStorage.getItem('cafeRenaissanceEmploymentForm');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // Convert string dates back to Date objects
        if (parsedData.dateOfBirth) parsedData.dateOfBirth = new Date(parsedData.dateOfBirth);
        if (parsedData.availableDate) parsedData.availableDate = new Date(parsedData.availableDate);
        if (parsedData.startDate1) parsedData.startDate1 = new Date(parsedData.startDate1);
        if (parsedData.endDate1) parsedData.endDate1 = new Date(parsedData.endDate1);
        if (parsedData.startDate2) parsedData.startDate2 = new Date(parsedData.startDate2);
        if (parsedData.endDate2) parsedData.endDate2 = new Date(parsedData.endDate2);
        
        form.reset(parsedData);
        toast.info("Your previously saved form data has been restored.");
      } catch (e) {
        console.error("Error loading saved form data", e);
        sessionStorage.removeItem('cafeRenaissanceEmploymentForm');
      }
    }
  }, [form]);
  
  // Save form progress when values change
  React.useEffect(() => {
    const subscription = form.watch((value) => {
      sessionStorage.setItem('cafeRenaissanceEmploymentForm', JSON.stringify(value));
    });
    
    return () => subscription.unsubscribe();
  }, [form]);
  
  const onSubmit = (values: FormValues) => {
    setFormData(values);
    setShowConfirmation(true);
  };
  
  const handleSendEmail = async () => {
    if (!formData) return;
    
    // Format dates for email
    const formatDate = (date: Date | undefined) => {
      return date ? format(date, 'MMMM do, yyyy') : 'N/A';
    };
    
    try {
      // Prepare application data for PHP script
      const applicationData = {
        firstName: formData.name.split(' ')[0] || '',
        lastName: formData.name.split(' ').slice(1).join(' ') || '',
        email: formData.email,
        phone: formData.phone,
        address: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        dateOfBirth: formatDate(formData.dateOfBirth),
        position: formData.position,
        startDate: formatDate(formData.availableDate),
        desiredSalary: formData.expectedRate,
        workSchedule: formData.availability,
        availability: [formData.availability],
        workExperience: [{
          company: formData.employer1,
          position: formData.position1,
          startDate: formatDate(formData.startDate1),
          endDate: formatDate(formData.endDate1),
          duties: '',
          reasonForLeaving: ''
        }],
        education: [{
          school: formData.schoolName,
          degree: formData.completionLevel,
          year: formData.lastYearCompleted
        }],
        references: [],
        emergencyContact: '',
        emergencyPhone: '',
        transportation: '',
        workAuthorization: formData.legallyAbleToWork,
        criminalBackground: formData.felonyConviction,
        additionalInfo: formData.referredBy ? `Referred by: ${formData.referredBy}` : ''
      };
      
      // Send to PHP script
      const response = await fetch('/send-application.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast.success("Thank you for your application! We will review it and get back to you soon.", {
          duration: 8000,
        });
        
        // Clear form data from session storage
        sessionStorage.removeItem('cafeRenaissanceEmploymentForm');
        
        // Reset form
        setShowConfirmation(false);
        form.reset();
        setActiveSection("personal");
      } else {
        throw new Error(result.error || 'Failed to send application');
      }
      
    } catch (error) {
      console.error('Error sending application:', error);
      toast.error("There was an error submitting your application. Please try again.");
    }
  };
  
  // Legacy code for reference - keeping structure but updating logic
  const createApplicationDataStructure = () => {
    if (!formData) return {};
    
    const formatDate = (date: Date | undefined) => {
      return date ? format(date, 'MMMM do, yyyy') : 'N/A';
    };

    return {
      personalInfo: {
        name: formData.name,
        dateOfBirth: formatDate(formData.dateOfBirth),
        address: `${formData.streetAddress}${formData.aptSuite ? ', ' + formData.aptSuite : ''}`,
        cityStateZip: `${formData.city}, ${formData.state} ${formData.zipCode}`,
        phone: formData.phone,
        email: formData.email
      },
      eligibility: {
        legallyAbleToWork: formData.legallyAbleToWork,
        position: formData.position,
        expectedRate: formData.expectedRate,
        referredBy: formData.referredBy || 'N/A',
        availableDate: formatDate(formData.availableDate),
        felonyConviction: formData.felonyConviction,
        availability: formData.availability,
        hoursPerWeek: formData.hoursPerWeek
      },
      education: {
        level: formData.educationLevel === 'highSchool' ? 'High School' : 'College',
        school: formData.schoolName,
        location: formData.schoolLocation,
        coursesMajor: formData.coursesMajor || 'N/A',
        lastYearCompleted: formData.lastYearCompleted,
        completion: formData.completionLevel === 'diploma' ? 'Diploma' : 'Degree'
      },
      employment: {
        recent: {
          employer: formData.employer1,
          startDate: formatDate(formData.startDate1),
          endDate: formatDate(formData.endDate1),
          position: formData.position1,
          address: formData.employerAddress1,
          phone: formData.employerPhone1
        },
        previous: formData.employer2 ? {
          employer: formData.employer2,
          startDate: formatDate(formData.startDate2),
          endDate: formatDate(formData.endDate2),
          position: formData.position2 || 'N/A',
          address: formData.employerAddress2 || 'N/A',
          phone: formData.employerPhone2 || 'N/A'
        } : null
      },
      verification: {
        code: formData.verificationCode,
        agreement: formData.agreement ? 'Yes' : 'No'
      },
      submissionDate: format(new Date(), 'MMMM do, yyyy, h:mm a')
    };
  };
  
  const handleClearForm = () => {
    form.reset();
    sessionStorage.removeItem('cafeRenaissanceEmploymentForm');
    toast.info("Form has been cleared.");
  };
  
  const handlePrintForm = () => {
    window.print();
  };
  
  if (showConfirmation && formData) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md print:shadow-none">
        <h2 className="font-playfair text-2xl font-bold text-mediterranean-navy mb-6">Confirm Your Application</h2>
          <p className="mb-6 text-mediterranean-navy/80">
            Please review your application details below. If everything looks correct, click "Submit Application" to send your application directly to our hiring team.
          </p>
        
        <div className="space-y-6 mb-6">
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-playfair text-xl font-semibold text-mediterranean-navy mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Date of Birth:</strong> {formData.dateOfBirth ? format(formData.dateOfBirth, 'MMMM do, yyyy') : 'N/A'}</p>
              <p><strong>Address:</strong> {formData.streetAddress}{formData.aptSuite && `, ${formData.aptSuite}`}</p>
              <p><strong>City, State ZIP:</strong> {formData.city}, {formData.state} {formData.zipCode}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Email:</strong> {formData.email}</p>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-playfair text-xl font-semibold text-mediterranean-navy mb-4">Employment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><strong>Position:</strong> {formData.position}</p>
              <p><strong>Expected Rate:</strong> ${formData.expectedRate}</p>
              <p><strong>Start Date:</strong> {formData.availableDate ? format(formData.availableDate, 'MMMM do, yyyy') : 'N/A'}</p>
              <p><strong>Availability:</strong> {formData.availability}</p>
              <p><strong>Hours Per Week:</strong> {formData.hoursPerWeek}</p>
              <p><strong>Legally Able to Work:</strong> {formData.legallyAbleToWork === 'yes' ? 'Yes' : 'No'}</p>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-playfair text-xl font-semibold text-mediterranean-navy mb-4">Education</h3>
            <p><strong>Level:</strong> {formData.educationLevel === 'highSchool' ? 'High School' : 'College'}</p>
            <p><strong>School:</strong> {formData.schoolName}</p>
            <p><strong>Location:</strong> {formData.schoolLocation}</p>
            <p><strong>Completion:</strong> {formData.completionLevel === 'diploma' ? 'Diploma' : 'Degree'}</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <Button 
            variant="outline" 
            onClick={() => setShowConfirmation(false)}
          >
            Back to Edit
          </Button>
          <Button 
            className="bg-mediterranean-gold hover:bg-mediterranean-gold/90 text-black"
            onClick={handlePrintForm}
          >
            Print Application
          </Button>
          <Button 
            className="bg-mediterranean-navy hover:bg-mediterranean-navy/90 text-white"
            onClick={handleSendEmail}
          >
            Submit Application
          </Button>
        </div>
      </div>
    );
  }
  
  // Progress indicators
  const sections = [
    { id: "personal", title: "Personal Information" },
    { id: "eligibility", title: "Eligibility & Availability" },
    { id: "education", title: "Education" },
    { id: "employment", title: "Employment History" },
    { id: "verification", title: "Verification" },
  ];
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress indicator */}
      <div className="mb-8 hidden md:block">
        <div className="flex justify-between">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className="flex flex-col items-center"
              onClick={() => setActiveSection(section.id)}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mb-2 cursor-pointer transition-colors",
                activeSection === section.id 
                  ? "bg-mediterranean-gold text-black" 
                  : "bg-gray-200 text-gray-600"
              )}>
                {index + 1}
              </div>
              <span className="text-sm font-medium text-center text-gray-700">{section.title}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 h-1 bg-gray-200 w-full"></div>
          <div 
            className="absolute top-0 h-1 bg-mediterranean-gold transition-all duration-300" 
            style={{ 
              width: `${(sections.findIndex(s => s.id === activeSection) / (sections.length - 1)) * 100}%` 
            }}
          ></div>
        </div>
      </div>
    
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <FormSection 
            title="Personal Information"
            active={activeSection === "personal"} 
            onActivate={() => setActiveSection("personal")}
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DatePickerField name="dateOfBirth" label="Date of Birth" />
              
              <AddressFields prefix="street" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="pt-4 flex justify-end">
                <Button 
                  type="button" 
                  className="bg-mediterranean-gold hover:bg-mediterranean-gold/90 text-black"
                  onClick={() => setActiveSection("eligibility")}
                >
                  Next: Eligibility & Availability
                </Button>
              </div>
            </div>
          </FormSection>
          
          {/* Eligibility & Availability */}
          <FormSection 
            title="Eligibility & Availability" 
            active={activeSection === "eligibility"} 
            onActivate={() => setActiveSection("eligibility")}
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="legallyAbleToWork"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Are you legally able to work in the US? <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-row space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="legally-yes" />
                          <Label htmlFor="legally-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="legally-no" />
                          <Label htmlFor="legally-no">No</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>For what position are you applying? <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position} value={position}>{position}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="expectedRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expected starting hourly rate ($) <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="15.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="referredBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Who referred you to Cafe Renaissance?</FormLabel>
                    <FormControl>
                      <Input placeholder="Friend/Website/Job Board" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DatePickerField name="availableDate" label="Date available for employment" />
              
              <FormField
                control={form.control}
                name="felonyConviction"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Have you ever been convicted of a felony? <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-row space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="felony-yes" />
                          <Label htmlFor="felony-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="felony-no" />
                          <Label htmlFor="felony-no">No</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work schedule availability <span className="text-red-500">*</span></FormLabel>
                    <FormDescription>
                      What shifts/hours are you available to work (Mon-Sat, 11:00 am thru 11:00 pm)
                    </FormDescription>
                    <FormControl>
                      <Textarea 
                        placeholder="E.g., Available Mon-Fri, 4pm-11pm, Sat all day"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="hoursPerWeek"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How many hours per week do you expect to work? <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="E.g., 20-30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4 flex justify-between">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setActiveSection("personal")}
                >
                  Previous
                </Button>
                <Button 
                  type="button" 
                  className="bg-mediterranean-gold hover:bg-mediterranean-gold/90 text-black"
                  onClick={() => setActiveSection("education")}
                >
                  Next: Education
                </Button>
              </div>
            </div>
          </FormSection>
          
          {/* Education */}
          <FormSection 
            title="Education" 
            active={activeSection === "education"} 
            onActivate={() => setActiveSection("education")}
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="educationLevel"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Education Level (Most recently completed) <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-row space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="highSchool" id="highSchool" />
                          <Label htmlFor="highSchool">High School</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="college" id="college" />
                          <Label htmlFor="college">College</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="schoolName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name of School <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="schoolLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location of School <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="City, State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="coursesMajor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Courses Majored In</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="lastYearCompleted"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Year Completed <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 2020" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="completionLevel"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Level Completed <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-row space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="diploma" id="diploma" />
                            <Label htmlFor="diploma">Diploma</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="degree" id="degree" />
                            <Label htmlFor="degree">Degree</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="pt-4 flex justify-between">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setActiveSection("eligibility")}
                >
                  Previous
                </Button>
                <Button 
                  type="button" 
                  className="bg-mediterranean-gold hover:bg-mediterranean-gold/90 text-black"
                  onClick={() => setActiveSection("employment")}
                >
                  Next: Employment History
                </Button>
              </div>
            </div>
          </FormSection>
          
          {/* Employment History */}
          <FormSection 
            title="Employment History" 
            active={activeSection === "employment"} 
            onActivate={() => setActiveSection("employment")}
          >
            <div className="space-y-6">
              {/* Most Recent Employment */}
              <div className="space-y-4">
                <h3 className="font-playfair text-lg font-semibold text-mediterranean-navy">Most Recent Employment</h3>
                
                <FormField
                  control={form.control}
                  name="employer1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employer Name <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DatePickerField name="startDate1" label="Start Date" />
                  <DatePickerField name="endDate1" label="End Date" />
                </div>
                
                <FormField
                  control={form.control}
                  name="position1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position Held <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="employerAddress1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employer Address <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Full address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="employerPhone1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employer Phone <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <h3 className="font-playfair text-lg font-semibold text-mediterranean-navy">Previous Employment (Optional)</h3>
                
                <FormField
                  control={form.control}
                  name="employer2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employer Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DatePickerField name="startDate2" label="Start Date" required={false} />
                  <DatePickerField name="endDate2" label="End Date" required={false} />
                </div>
                
                <FormField
                  control={form.control}
                  name="position2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position Held</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="employerAddress2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employer Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Full address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="employerPhone2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employer Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="pt-4 flex justify-between">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setActiveSection("education")}
                >
                  Previous
                </Button>
                <Button 
                  type="button" 
                  className="bg-mediterranean-gold hover:bg-mediterranean-gold/90 text-black"
                  onClick={() => setActiveSection("verification")}
                >
                  Next: Verification
                </Button>
              </div>
            </div>
          </FormSection>
          
          {/* Verification */}
          <FormSection 
            title="Verification & Submission" 
            active={activeSection === "verification"} 
            onActivate={() => setActiveSection("verification")}
          >
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="verificationCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verification Code <span className="text-red-500">*</span></FormLabel>
                    <FormDescription>
                      Please enter any two digits (e.g. "12")
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <h3 className="font-playfair text-lg font-semibold text-mediterranean-navy mb-3">Legal Agreement</h3>
                <p className="text-xs text-mediterranean-navy/80 mb-3 uppercase">
                  I AFFIRM THAT ALL INFORMATION IN THIS APPLICATION IS TRUE AND COMPLETE. ANY MISREPRESENTATION, FALSE STATEMENT OR OMISSION OF FACTS CALLED FOR SHALL BE GROUNDS FOR REFUSAL OF EMPLOYMENT OR IF HIRED, DISMISSAL FROM EMPLOYMENT. I UNDERSTAND THAT ANY VIOLATION OF COMPANY RULES, POLICIES, STANDARDS, AND/OR PROCEDURES SHALL BE GROUNDS FOR DISMISSAL. I AGREE TO CONFORM TO THE RULES POLICIES, STANDARDS, AND REGULATIONS OF THE CAFE RENAISSANCE. I UNDERSTAND THAT MY EMPLOYMENT AND COMPENSATION CAN BE TERMINATED WITH OR WITHOUT CAUSE AND WITHOUT NOTICE, AT ANY TIME AT THE OPTION OF THE CAFE RENAISSANCE OR MYSELF, AND I UNDERSTAND THAT NO REPRESENTATIVE OF THE COMPANY HAS THE AUTHORITY TO MAKE ANY MODIFICATIONS, EITHER VERBALLY OR IN WRITING TO THE CONTRARY.
                </p>
                <p className="text-xs text-mediterranean-navy/80 uppercase">
                  IT IS THE POLICY OF THE CAFE RENAISSANCE TO HIRE ONLY U.S. CITIZENS AND ALIENS WHO ARE LAWFULLY AUTHORIZED TO WORK IN THE UNITED STATES. ALL EMPLOYEES WILL BE ASKED TO VERIFY EMPLOYMENT ELIGIBILITY PRIOR TO BEGINNING WORK.
                </p>
              </div>
              
              <FormField
                control={form.control}
                name="agreement"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the terms and conditions <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormDescription>
                        By checking this box, you confirm that you have read and agree to the terms above.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4 flex flex-col md:flex-row justify-between gap-4">
                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setActiveSection("employment")}
                  >
                    Previous
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleClearForm}
                  >
                    Clear Form
                  </Button>
                </div>
                <Button 
                  type="submit" 
                  className="bg-mediterranean-navy hover:bg-mediterranean-navy/90 text-white"
                >
                  Submit Application
                </Button>
              </div>
            </div>
          </FormSection>
        </form>
      </FormProvider>
    </div>
  );
};

export default EmploymentForm;
